# Subscription Usage Analyzer

Un'applicazione web moderna per monitorare, gestire e ottimizzare le sottoscrizioni digitali con AI-powered insights.

## 🎯 Obiettivo

L'app aiuta sia utenti individuali sia piccoli SaaS a monitorare, gestire e ottimizzare le proprie sottoscrizioni digitali (es. Spotify, Netflix, Notion, GitHub, ecc.).

## ✨ Funzionalità Principali

- **🔐 Autenticazione**: Signup/Login con Clerk (email/password + Google OAuth)
- **📊 Dashboard**: Personale (utente singolo) o Team (multi-utente, con ruoli)
- **➕ Gestione Sottoscrizioni**: Aggiunta manuale o import da email (mockata nel MVP)
- **📈 Analytics**: Visualizzazione spese mensili/annuali per servizio
- **🤖 AI Recommendations**: Suggerimenti intelligenti per ottimizzazione
- **🔔 Alert**: Notifiche su aumenti di prezzo e sottoutilizzo
- **💳 Tier a Pagamento**: Integrazione con Stripe
- **📅 Cronologia**: Tracking di utilizzo per mese
- **📤 Export**: Report in CSV/PDF
- **👥 Team Features**: Dashboard condivisa con tagging per membri

## 🧱 Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS + Shadcn UI
- **Autenticazione**: Clerk
- **Backend**: Supabase (PostgreSQL) + API REST/Edge
- **AI**: OpenAI API per generare suggerimenti
- **Pagamenti**: Stripe
- **Notifiche**: Interfaccia locale (push/email future)
- **Analytics**: Mixpanel (opzionale nel MVP)

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+
- npm o yarn
- Account Supabase
- Account Clerk
- Account Stripe (opzionale per MVP)

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd subscription-analyzer
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Configura le variabili d'ambiente**
   ```bash
   cp env.example .env.local
   ```

   Compila il file `.env.local` con le tue credenziali:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Stripe (opzionale per MVP)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

5. **Apri il browser**
   Naviga su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
subscription-analyzer/
├── src/
│   ├── app/                    # App Router di Next.js
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Dashboard protetta
│   │   ├── pricing/           # Pagina pricing
│   │   ├── subscriptions/     # Gestione sottoscrizioni
│   │   ├── team/              # Gestione team
│   │   └── settings/          # Impostazioni utente
│   ├── components/            # Componenti React
│   │   ├── ui/               # Componenti UI base (shadcn)
│   │   ├── dashboard/        # Componenti dashboard
│   │   ├── auth/             # Componenti autenticazione
│   │   ├── subscriptions/    # Componenti sottoscrizioni
│   │   ├── team/             # Componenti team
│   │   └── pricing/          # Componenti pricing
│   ├── lib/                  # Utility e configurazioni
│   ├── types/                # Definizioni TypeScript
│   ├── hooks/                # Custom React hooks
│   └── utils/                # Funzioni utility
├── public/                   # Asset statici
└── env.example              # Template variabili d'ambiente
```

## 🗄️ Schema Database (Supabase)

### Tabelle Principali

```sql
-- Utenti (gestiti da Clerk, sincronizzati con Supabase)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Team
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  owner_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Membri Team
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('owner', 'admin', 'member')) DEFAULT 'member',
  joined_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(team_id, user_id)
);

-- Sottoscrizioni
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  billing_cycle TEXT CHECK (billing_cycle IN ('monthly', 'yearly')) DEFAULT 'monthly',
  status TEXT CHECK (status IN ('active', 'cancelled', 'paused')) DEFAULT 'active',
  start_date DATE NOT NULL,
  next_billing_date DATE NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Dati di Utilizzo
CREATE TABLE usage_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  usage_count INTEGER DEFAULT 0,
  usage_duration INTEGER, -- in minuti
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Raccomandazioni AI
CREATE TABLE ai_recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('downgrade', 'upgrade', 'cancel', 'optimize')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  confidence DECIMAL(3,2) CHECK (confidence >= 0 AND confidence <= 1),
  potential_savings DECIMAL(10,2),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Notifiche
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('price_increase', 'underutilization', 'billing_reminder', 'ai_recommendation')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Componenti UI

Il progetto utilizza [shadcn/ui](https://ui.shadcn.com/) per i componenti base:

- **Button**: Varianti multiple (default, outline, ghost, etc.)
- **Card**: Layout cards con header, content, footer
- **Input**: Campi di input stilizzati
- **Dialog**: Modal e popup
- **Toast**: Notifiche toast
- **Tabs**: Navigazione a tab
- **Select**: Dropdown select
- **Avatar**: Avatar utente
- **Progress**: Barre di progresso

## 🔧 Configurazione

### Clerk (Autenticazione)

1. Crea un account su [clerk.com](https://clerk.com)
2. Crea una nuova applicazione
3. Copia le chiavi API nel `.env.local`

### Supabase (Database)

1. Crea un account su [supabase.com](https://supabase.com)
2. Crea un nuovo progetto
3. Esegui lo schema SQL fornito sopra
4. Copia le credenziali nel `.env.local`

### Stripe (Pagamenti)

1. Crea un account su [stripe.com](https://stripe.com)
2. Crea i prodotti e prezzi per i piani
3. Configura i webhook
4. Copia le chiavi API nel `.env.local`

## 📱 Piani di Prezzo

- **Starter**: $2.99/mese → 10 sottoscrizioni
- **Pro**: $5.99/mese → illimitato + AI avanzata
- **Team**: $19.99/mese → 5 utenti + tagging membri + report team
- **Business**: $49.99/mese → 15 utenti, esportazioni avanzate

## 🚧 Roadmap

### Fase 1 (MVP) ✅
- [x] Setup progetto Next.js
- [x] Configurazione Tailwind + Shadcn UI
- [x] Homepage e landing page
- [x] Pagina pricing
- [x] Tipi TypeScript
- [x] Struttura componenti base

### Fase 2 (Autenticazione & Database)
- [ ] Integrazione Clerk
- [ ] Setup Supabase
- [ ] Schema database
- [ ] API routes base

### Fase 3 (Dashboard & Core Features)
- [ ] Dashboard utente
- [ ] CRUD sottoscrizioni
- [ ] Analytics base
- [ ] Sistema notifiche

### Fase 4 (AI & Advanced Features)
- [ ] Integrazione OpenAI
- [ ] Raccomandazioni AI
- [ ] Team management
- [ ] Export reports

### Fase 5 (Payments & Polish)
- [ ] Integrazione Stripe
- [ ] Sistema pricing
- [ ] Ottimizzazioni performance
- [ ] Testing

## 🤝 Contribuire

1. Fork il progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 📞 Supporto

Per supporto o domande:
- Email: support@subscriptionanalyzer.com
- Discord: [Link Discord]
- Documentazione: [Link Docs]

---

**Subscription Usage Analyzer** - Take control of your digital subscriptions! 🚀
