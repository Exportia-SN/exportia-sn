# ExportiaSN - Guide de Déploiement

## Vue d'ensemble

Ce projet est un site web vitrine premium pour **ExportiaSN**, construit avec **Next.js 14**, **TypeScript**, **Tailwind CSS** et optimisé pour **Netlify**.

## Caractéristiques

✅ **Performance Premium**
- Core Web Vitals optimisés (LCP < 2.5s, CLS < 0.1)
- Image optimization automatique (WebP, lazy loading)
- Code splitting et minification
- Compression gzip/brotli

✅ **SEO Avancé**
- Schema.org (Organization, Service)
- Meta tags uniques par page
- Sitemap.xml et robots.txt
- Open Graph et Twitter Cards
- Canonical URLs

✅ **Responsive Design**
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Tested sur tous les appareils

✅ **Accessibilité**
- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation

✅ **Sécurité**
- Security headers (CSP, X-Frame-Options, etc.)
- HTTPS enforced
- No external vulnerabilities

## Structure du Projet

```
exportia-sn/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Styles globaux
│   │   ├── a-propos/           # Page À Propos
│   │   ├── services/           # Page Services
│   │   ├── secteurs/           # Page Secteurs
│   │   └── contact/            # Page Contact
│   ├── components/
│   │   ├── Header.tsx          # Navigation
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── Card.tsx            # Composants Card
│   │   ├── Section.tsx         # Composants Section
│   │   └── SchemaOrganization.tsx # SEO Schema
│   └── lib/                    # Utilitaires
├── public/
│   ├── images/                 # Images optimisées
│   ├── fonts/                  # Fonts personnalisées
│   ├── favicon.ico             # Favicon
│   ├── robots.txt              # SEO robots
│   ├── sitemap.xml             # Sitemap
│   └── manifest.json           # PWA manifest
├── next.config.ts              # Configuration Next.js
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
├── netlify.toml                # Configuration Netlify
└── package.json                # Dépendances
```

## Installation Locale

### Prérequis
- Node.js 22.13.0+
- pnpm 10.19.0+

### Étapes

```bash
# 1. Cloner le projet
cd exportia-sn

# 2. Installer les dépendances
pnpm install

# 3. Démarrer le serveur de développement
pnpm dev

# 4. Ouvrir http://localhost:3000 dans le navigateur
```

## Build pour Production

```bash
# Build optimisé
pnpm build

# Tester la production localement
pnpm start
```

## Déploiement sur Netlify

### Option 1: Via Git (Recommandé)

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ExportiaSN website"
   git remote add origin https://github.com/yourusername/exportia-sn.git
   git push -u origin main
   ```

2. **Connecter à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer sur "New site from Git"
   - Sélectionner GitHub et autoriser
   - Choisir le repository `exportia-sn`
   - Les paramètres de build seront automatiquement détectés depuis `netlify.toml`

3. **Configuration automatique**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Node version: 22.13.0

### Option 2: Deploy Direct (CLI)

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Authentifier
netlify login

# Déployer
netlify deploy --prod
```

## Variables d'Environnement

Créer un fichier `.env.local` pour la configuration locale:

```bash
NEXT_PUBLIC_SITE_URL=https://exportia-sn.netlify.app
NEXT_PUBLIC_SITE_NAME=ExportiaSN
```

## Images & Assets

### Placeholder Images

Le site utilise actuellement des **emoji et couleurs de gradient** comme placeholders. Pour ajouter les vraies images:

1. **Générer les images** selon les prompts dans `IMAGE_PROMPTS.md`
2. **Placer les images** dans `/public/images/`
3. **Nommer les fichiers** selon les spécifications
4. **Optimiser les images** (WebP, compression)

### Emojis Actuels (À remplacer)

- 🌾 Produits agricoles
- 🏗️ Matériaux de construction
- ⛏️ Matières premières
- 🛒 Produits de consommation
- 📋 Services de conseil
- 🌐 Icônes de navigation

## Optimisation Performance

### Lighthouse Audit

```bash
# Générer un rapport Lighthouse
pnpm audit
```

**Objectifs:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Maintenance

### Mise à jour des dépendances

```bash
# Vérifier les mises à jour
pnpm outdated

# Mettre à jour
pnpm update
```

### Monitoring

- Netlify Analytics: Dashboard automatique
- Google Search Console: Indexation et erreurs
- Sentry (optionnel): Error tracking

## Contenu à Mettre à Jour

### Coordonnées de Contact
Fichier: `src/app/contact/page.tsx`

```typescript
// À remplacer:
+221 [Numéro de téléphone]
contact@exportia-sn.com
https://wa.me/221
https://www.linkedin.com/company/exportia-sn
```

### Informations Entreprise
Fichier: `src/components/SchemaOrganization.tsx`

```typescript
// À remplacer:
- Adresse complète
- Téléphone
- Email
- URLs des réseaux sociaux
```

## Checklist Pré-Lancement

- [ ] Toutes les images sont en place
- [ ] Coordonnées de contact mises à jour
- [ ] Réseaux sociaux configurés
- [ ] Google Search Console vérifié
- [ ] Analytics configuré
- [ ] Formulaire de contact fonctionnel
- [ ] Tous les liens testés
- [ ] Mobile responsiveness vérifié
- [ ] Lighthouse audit ≥ 95
- [ ] SSL certificate actif

## Support & Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Web Vitals](https://web.dev/vitals)

## License

Propriétaire - ExportiaSN © 2024

---

**Dernière mise à jour:** 26 Octobre 2024
**Version:** 1.0.0

