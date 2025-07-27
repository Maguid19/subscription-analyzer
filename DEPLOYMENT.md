# Deployment Guide - Subscription Usage Analyzer

Questa guida ti aiuterà a deployare l'applicazione Subscription Usage Analyzer su Vercel.

## 🚀 Prerequisiti

- Account [Vercel](https://vercel.com)
- Account [Supabase](https://supabase.com)
- Account [Clerk](https://clerk.com)
- Account [Stripe](https://stripe.com) (opzionale per MVP)
- Account [OpenAI](https://openai.com) (opzionale per MVP)

## 📋 Setup Step-by-Step

### 1. Preparazione del Repository

1. **Push del codice su GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Subscription Usage Analyzer"
   git push origin main
   ```

2. **Verifica che tutti i file siano presenti**
   - `package.json` con tutte le dipendenze
   - `next.config.ts`
   - `tailwind.config.ts`
   - `tsconfig.json`
   - `.eslintrc.json`
   - `.prettierrc`
   - `vercel.json`

### 2. Setup Supabase

1. **Crea un nuovo progetto su Supabase**
   - Vai su [supabase.com](https://supabase.com)
   - Crea un nuovo progetto
   - Salva l'URL e le chiavi API

2. **Esegui lo schema del database**
   - Copia il contenuto di `supabase-schema.sql`
   - Esegui lo script nel SQL Editor di Supabase

3. **Configura Row Level Security (RLS)**
   - Lo schema include già le policy RLS
   - Verifica che siano attive nelle impostazioni del progetto

### 3. Setup Clerk

1. **Crea un'applicazione su Clerk**
   - Vai su [clerk.com](https://clerk.com)
   - Crea una nuova applicazione
   - Configura i provider di autenticazione (email, Google)

2. **Configura le URL di redirect**
   - Development: `http://localhost:3000/*`
   - Production: `https://your-domain.vercel.app/*`

3. **Salva le chiavi API**
   - Publishable Key
   - Secret Key

### 4. Setup Stripe (Opzionale per MVP)

1. **Crea un account Stripe**
   - Vai su [stripe.com](https://stripe.com)
   - Crea un account e passa in modalità test

2. **Crea i prodotti e prezzi**
   ```bash
   # Usa Stripe CLI o Dashboard per creare:
   # - Starter Plan: $2.99/month
   # - Pro Plan: $5.99/month
   # - Team Plan: $19.99/month
   # - Business Plan: $49.99/month
   ```

3. **Configura i webhook**
   - Endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
   - Eventi: `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`

### 5. Setup OpenAI (Opzionale per MVP)

1. **Crea un account OpenAI**
   - Vai su [openai.com](https://openai.com)
   - Genera una API key

### 6. Deploy su Vercel

1. **Connetti il repository**
   - Vai su [vercel.com](https://vercel.com)
   - Importa il repository GitHub
   - Configura il progetto

2. **Configura le variabili d'ambiente**
   ```env
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   SUPABASE_SERVICE_ROLE_KEY=eyJ...

   # Stripe (opzionale)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...

   # OpenAI (opzionale)
   OPENAI_API_KEY=sk-...

   # App URL
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

3. **Deploy**
   - Clicca su "Deploy"
   - Aspetta che il build sia completato
   - Verifica che l'app funzioni

### 7. Post-Deploy Setup

1. **Aggiorna le URL di Clerk**
   - Vai nelle impostazioni di Clerk
   - Aggiorna le URL di redirect con il dominio di produzione

2. **Configura i webhook di Stripe**
   - Aggiorna l'endpoint webhook con l'URL di produzione
   - Testa i webhook

3. **Verifica il database**
   - Controlla che le tabelle siano create correttamente
   - Testa le policy RLS

## 🔧 Configurazioni Avanzate

### Custom Domain

1. **Aggiungi un dominio personalizzato**
   - Vai nelle impostazioni del progetto Vercel
   - Aggiungi il tuo dominio
   - Configura i DNS

2. **Aggiorna le configurazioni**
   - Aggiorna `NEXT_PUBLIC_APP_URL`
   - Aggiorna le URL di Clerk
   - Aggiorna i webhook di Stripe

### Environment Variables per Staging

Crea un ambiente di staging separato:

```env
# Staging Environment
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SUPABASE_URL=https://your-staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXT_PUBLIC_APP_URL=https://staging.your-domain.com
```

### Monitoring e Analytics

1. **Vercel Analytics**
   - Abilita Vercel Analytics nel dashboard
   - Monitora le performance

2. **Error Tracking**
   - Considera Sentry per il tracking degli errori
   - Configura gli alert

## 🚨 Troubleshooting

### Build Errors

1. **Dependency Issues**
   ```bash
   npm install
   npm run build
   ```

2. **TypeScript Errors**
   ```bash
   npm run type-check
   ```

3. **Linting Errors**
   ```bash
   npm run lint:fix
   ```

### Runtime Errors

1. **Environment Variables**
   - Verifica che tutte le variabili siano configurate
   - Controlla i log di Vercel

2. **Database Connection**
   - Verifica le credenziali Supabase
   - Controlla le policy RLS

3. **Authentication Issues**
   - Verifica le configurazioni Clerk
   - Controlla le URL di redirect

### Performance Issues

1. **Bundle Size**
   ```bash
   npm run build
   # Analizza il bundle size
   ```

2. **Database Queries**
   - Ottimizza le query
   - Aggiungi indici se necessario

## 📊 Monitoring

### Vercel Dashboard
- Performance metrics
- Function execution logs
- Error tracking

### Supabase Dashboard
- Database performance
- Query logs
- Storage usage

### Clerk Dashboard
- User authentication logs
- Session management
- Security events

## 🔒 Security Checklist

- [ ] Environment variables configurate correttamente
- [ ] RLS policies attive su Supabase
- [ ] Webhook signatures verificate
- [ ] HTTPS abilitato
- [ ] CORS configurato correttamente
- [ ] Rate limiting implementato
- [ ] Input validation attiva
- [ ] Error handling implementato

## 📈 Scaling

### Database Scaling
- Monitora l'uso di Supabase
- Considera l'upgrade del piano se necessario

### Application Scaling
- Vercel scala automaticamente
- Monitora le performance
- Ottimizza il codice se necessario

## 🆘 Support

Per problemi di deployment:
1. Controlla i log di Vercel
2. Verifica le configurazioni
3. Consulta la documentazione dei servizi
4. Contatta il supporto se necessario

---

**Happy Deploying! 🚀**