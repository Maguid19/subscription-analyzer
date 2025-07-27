import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Get the webhook secret from environment variables
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('CLERK_WEBHOOK_SECRET is not set');
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
    console.error('Missing svix headers');
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret
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
    console.error('Error verifying webhook signature:', err);
    return new Response('Error occurred -- invalid signature', {
      status: 400
    });
  }

  // Handle the webhook event
  const eventType = evt.type;
  console.log(`Webhook event received: ${eventType}`);

  // Handle user.created events
  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name } = evt.data;

    // Log the user ID to console as requested
    console.log(`New user created with ID: ${id}`);

    // Log additional user information
    if (email_addresses && email_addresses.length > 0) {
      console.log(`User email: ${email_addresses[0].email_address}`);
    }
    if (first_name || last_name) {
      console.log(`User name: ${first_name || ''} ${last_name || ''}`.trim());
    }
  }

  // Return success response
  return NextResponse.json({ success: true });
}