# CLAUDE.md — Project context for Claude Code

## Progetto

Landing page **ELEVA x TAVO**, dominio `www.eleva-tavo.it`, hosted su GitHub Pages, repo `Web4Lazy/eleva-tavo`.
Generata inizialmente con Lovable.dev, ora gestita via Git con deploy automatico.

## Titolare legale

**Eleva di Stefania Favero**
- P.IVA: 12946040016
- Sede: Via Monte Ortigara 41, 10141 Torino
- Email: info@elevapet.com
- Sito brand: elevapet.com

## Stack tecnico

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (componenti in `src/components/ui/`)
- react-router-dom per routing
- @tanstack/react-query
- lucide-react per icone
- Font: DM Sans self-hosted in `public/fonts/`
- Deploy: GitHub Actions -> GitHub Pages (`.github/workflows/deploy.yml`)
- Custom domain via `public/CNAME`

## Struttura directory rilevante

- `src/components/` — componenti sezione landing (HeroSection, VideoFocusCarousel, ExpandableVideoSection, ProductSection, FAQSection, Footer, ecc.)
- `src/components/ui/` — componenti shadcn (non toccare salvo necessita)
- `src/hooks/` — hook custom (useCookieConsent, use-mobile, use-toast)
- `src/pages/` — pagine routing (Index, NotFound, presto cookie-policy e privacy-policy)
- `src/assets/` — immagini importate
- `public/` — asset statici serviti direttamente (CNAME, 404.html, fonts/)

## Convenzioni codice

- TypeScript strict
- Componenti funzionali con default export
- Classi Tailwind via design tokens (`bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`, `border-border`, `bg-card`, ecc.) — MAI colori hardcoded tipo `bg-white` o `text-black`
- Path alias: `@/` punta a `src/`
- Spacing sezioni: class `section-padding` e `container-custom`

## Sistema consenso cookie (GDPR)

- Hook: `src/hooks/useCookieConsent.tsx`
- Banner: `src/components/CookieBanner.tsx`
- 3 categorie: necessary (sempre true), analytics, marketing
- Storage key: `eleva_consent_v1`, policyVersion `2026-04-13` (bump se cambiano le policy)
- Video YouTube (VideoFocusCarousel) gated su consenso marketing: senza consenso mostra placeholder, con consenso usa `youtube-nocookie.com`
- Vimeo (ExpandableVideoSection) gia click-to-play + `dnt=1`
- Nessun tracker di terze parti attivo senza consenso

## Deploy workflow

- Push su `main` -> GitHub Action `.github/workflows/deploy.yml` fa `npm ci` + `npm run build` + deploy su Pages
- CNAME in `public/CNAME` contiene `www.eleva-tavo.it` (preservato in ogni build via Vite)
- Il routing SPA funziona su URL dirette grazie allo script in 404.html che codifica il path in query string, e allo script in index.html che decodifica e fa history.replaceState prima del mount di React.
- Se la Action fallisce su `npm ci`, significa `package-lock.json` disallineato -> `npm install` in locale + commit lockfile

## Regole di lavoro per Claude Code

- Prima di modificare un componente, leggerlo per intero
- Dopo modifiche: sempre `npx tsc --noEmit` + `npm run build` prima del commit
- Commit message in inglese, stile conventional (`feat:`, `fix:`, `chore:`, `docs:`)
- MAI toccare `src/components/ui/` (shadcn primitives) salvo richiesta esplicita
- MAI cambiare il contenuto di `public/CNAME` salvo cambio dominio
- Rispetta l'architettura esistente: niente refactor spontanei non richiesti

## Changelog

- 2026-04-13 — Fix SPA routing su GitHub Pages: implementato pattern spa-github-pages (rafgraph) in 404.html e index.html per supportare URL dirette e F5 su /cookie-policy e /privacy-policy
- 2026-04-13 — Aggiunte pagine /cookie-policy e /privacy-policy (GDPR art. 13), link nel Footer + pulsante "Preferenze cookie" ghost shadcn per riaprire il banner, componente ScrollToTop per reset scroll al cambio rotta
- 2026-04-13 — Self-host DM Sans per GDPR compliance, rimosso Google Fonts
- 2026-04-13 — Aggiunto sistema consenso cookie (hook + banner) e gating YouTube via youtube-nocookie.com con fallback placeholder senza consenso marketing; aggiunto dnt=1 a Vimeo
- 2026-04-13 — Setup GitHub Pages + custom domain www.eleva-tavo.it (DNS GoDaddy), workflow deploy.yml, CNAME, 404.html fallback
