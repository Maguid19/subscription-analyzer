# 🚀 Guida Deploy Subscription Analyzer su Vercel

## 1. Crea Repository su GitHub

1. Vai su [github.com/new](https://github.com/new)
2. Nome: `subscription-analyzer`
3. Privato o Pubblico (a tua scelta)
4. **NON** inizializzare con README

## 2. Collega il Repository Locale

```bash
# Sostituisci YOUR_USERNAME con il tuo username GitHub
git remote add origin https://github.com/YOUR_USERNAME/subscription-analyzer.git
git branch -M main
git push -u origin main
```

## 3. Deploy su Vercel

### Via Dashboard (Consigliato):
1. Vai su [vercel.com/new](https://vercel.com/new)
2. Importa il repository `subscription-analyzer`
3. **Configura le Variabili d'Ambiente**:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

4. Clicca "Deploy"

### Via CLI (Alternativa):
```bash
npx vercel --yes
```

## 4. Dopo il Deploy

Il tuo URL sarà tipo:
- `https://subscription-analyzer-username.vercel.app`

## 5. Configura Webhook su Clerk

1. Vai su Clerk Dashboard → Webhooks
2. Endpoint URL: `https://subscription-analyzer-username.vercel.app/api/webhooks/clerk`
3. Seleziona eventi:
   - user.created
   - user.updated
   - user.deleted
4. Copia il Signing Secret → CLERK_WEBHOOK_SECRET in Vercel