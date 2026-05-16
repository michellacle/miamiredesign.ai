# Miami Redesign.ai Project Structure

```
miamiredesign/
├── src/                   # Next.js source
│   ├── app/
│   │   ├── layout.tsx     # Root layout with SEO metadata
│   │   ├── page.tsx       # Home page (index)
│   │   └── globals.css    # Tailwind + dark theme
│   └── components/
│       ├── HeroSection.tsx          # Hero with CTAs
│       ├── ToolsSection.tsx         # URL + description inputs
│       ├── ResultsSection.tsx       # Feature cards + CTA
│       └── TrustSection.tsx         # Industry trust + slogan
├── public/                # Static assets
├── env.ts                 # Environment variables
└── package.json           # Dependencies
```
