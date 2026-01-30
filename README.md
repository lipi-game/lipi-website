# Lipi Inc

**AI-Powered Learning & Gaming Platform for Indian Epics and Native Languages**

Lipi Inc is an AI-powered education and gaming technology company building the next generation of learning experiences rooted in Indian epics, native languages, and cultural intelligence.

Through a growing suite of fun gaming apps and structured learning platforms, Lipi Inc brings timeless wisdom from the Mahabharata and Ramayana into interactive play, word games, and guided learning journeys. Alongside epic-based experiences, our native language game portfolio—including Brain Booster, WordCruise, and Lipi Kids—helps learners strengthen vocabulary, thinking skills, and language fluency across Indian languages and English.

By combining AI-driven personalization, gamification, and culturally rooted content, Lipi Inc addresses a critical gap where ancient wisdom and mother-tongue learning are often missing from modern education. Our platforms make heritage relevant, engaging, and accessible for today's digital-first children and young learners.

**Mission:** To carry India's epic wisdom and linguistic richness forward—through technology, play, and purposeful learning.

---

## 🎮 Our Games

| Game | Description |
|------|-------------|
| **Lipi Epics** | Learn Mahabharata & Ramayana through immersive storytelling, AI-generated videos, and structured quizzes |
| **Lipi Kids** | Bilingual vocabulary learning for ages 3-14 in English and Telugu |
| **Brain Booster** | Word-based quiz app for vocabulary development |
| **Word Cruise** | Daily word formation game with vocabulary challenges |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 |
| **Build Tool** | Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Animations** | Framer Motion |
| **Routing** | React Router DOM v6 |
| **State Management** | Recoil, TanStack React Query |
| **Form Handling** | React Hook Form + Zod |
| **Notifications** | Sonner |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 (LTS recommended)
- **npm** >= 9.0.0

You can verify your installation with:

```bash
node --version
npm --version
```

---

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd lipi-inc
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)

   Copy the example environment file and configure as needed:

   ```bash
   cp .env.example .env
   ```

---

## 💻 Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

---

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── app/                    # App-level config (router, providers)
│   ├── providers/          # Context providers
│   ├── router/             # Route definitions
│   └── styles/             # Design tokens
├── components/ui/          # shadcn/ui components
├── features/               # Feature-based modules
│   ├── about/              # About page feature
│   ├── blog/               # Blog feature
│   ├── faq/                # FAQ feature
│   ├── games/              # Games feature
│   └── home/               # Homepage feature
├── hooks/                  # Shared React hooks
├── lib/                    # Utility functions
├── pages/                  # Standalone pages
└── shared/                 # Shared components & hooks
    ├── components/         # Reusable UI components
    ├── hooks/              # Shared hooks (useSEO, etc.)
    ├── layout/             # Layout components (Navbar, Footer)
    └── state/              # Global state atoms
```

---

## 🔗 Useful Links

- **Website:** [https://lipiinc.com](https://lipiinc.com)
- **App Store:** [Lipi on iOS](https://apps.apple.com/us/developer/lipi-inc/id1772086567)
- **Google Play:** [Lipi on Android](https://play.google.com/store/apps/dev?id=6433036785319466025)

---

## 📄 License

© 2024 Lipi Inc. All rights reserved.
