import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Validate webhook secret exists
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('CLERK_WEBHOOK_SECRET not set');
    return new Response('Server configuration error', {
      status: 500
    });
  }

  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  // Handle the webhook
  const eventType = evt.type;
  console.log(`Webhook event: ${eventType}`);

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    const email = email_addresses[0]?.email_address;

    if (!email) {
      console.error('No email found for user:', id);
      return new Response('No email found', { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    try {
      // Upsert user in Supabase
      const { error } = await supabase
        .from('users')
        .upsert({
          id: id, // Use Clerk ID as the primary key UUID
          email: email,
          first_name: first_name || null,
          last_name: last_name || null,
          avatar_url: image_url || null,
        }, {
          onConflict: 'id'
        });

      if (error) {
        console.error('Error upserting user:', error);
        return new Response('Error upserting user', { status: 500 });
      }

      console.log(`User ${eventType === 'user.created' ? 'created' : 'updated'}: ${email}`);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return new Response('Error processing webhook', { status: 500 });
    }
  } else if (eventType === 'user.deleted') {
    const { id } = evt.data;

    const supabase = createServerSupabaseClient();

    try {
      // Delete user from Supabase
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id); // Use id instead of clerk_id

      if (error) {
        console.error('Error deleting user:', error);
        return new Response('Error deleting user', { status: 500 });
      }

      console.log(`User deleted: ${id}`);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return new Response('Error processing webhook', { status: 500 });
    }
  } else if (eventType === 'session.created') {
    // Esempio: Tracciare l'ultima attività dell'utente
    const { user_id, created_at } = evt.data;

    if (user_id) {
      const supabase = createServerSupabaseClient();

      try {
        // Potresti aggiornare un campo last_active_at nella tabella users
        // o creare una tabella separata per le sessioni
        console.log(`User ${user_id} logged in at ${created_at}`);

        // Esempio: Triggerare un controllo sull'utilizzo degli abbonamenti
        // await checkSubscriptionUsage(user_id);

        return NextResponse.json({ success: true });
      } catch (error) {
        console.error('Error processing session webhook:', error);
        return new Response('Error processing webhook', { status: 500 });
      }
    }
  }

  // Return success for unhandled events
  console.log(`Unhandled webhook event: ${eventType}`);
  return NextResponse.json({ success: true });
}

/*
  Altri eventi Clerk che potresti voler gestire:

  1. session.created - Quando un utente fa login
     - Utile per tracciare l'ultima attività
     - Può triggerare controlli di utilizzo abbonamenti

  2. session.ended - Quando un utente fa logout
     - Utile per analytics di sessione

  3. organization.created / organization.updated - Se usi Clerk Organizations
     - Per gestire team/aziende

  4. email.created - Quando viene inviata un'email
     - Per tracciare comunicazioni

  Per configurarli:
  1. Vai su https://dashboard.clerk.com
  2. Seleziona la tua applicazione
  3. Vai in Webhooks > Create Endpoint
  4. Aggiungi URL: https://tuodominio.com/api/webhooks/clerk
  5. Seleziona gli eventi desiderati
  6. Copia il Signing Secret in CLERK_WEBHOOK_SECRET
*/