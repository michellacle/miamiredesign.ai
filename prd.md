# PRD: AI-First Rapid Web Agency

## 1. Executive Summary
A high-velocity web design and marketing firm that uses AI agents to replace the traditional, slow, and expensive web agency process. 

**Core Value Proposition:** Instant, stunning website redesigns for $297 (or similar low entry point) that are optimized for both traditional SEO and AI-search (LLMs).

**Primary Services:**
1. **Instant Redesign:** Input a competitor's or your own URL -> get an instant, modern AI prototype.
2. **Instant Build:** Input a business description -> get a fully populated, visually striking website prototype.

## 2. Target Audience
*   **Primary:** Miami SMBs (Restaurants, medical, real estate, retail) burned by slow agencies ($10k+, 6-week turnaround).
*   **Secondary:** Marketing Directors needing rapid A/B landing pages or SEO updates.
*   **Pain Points:** Slow timelines, high costs, jargon.

## 3. User Experience (UX)

### A. The URL Redesign Tool
1. User inputs a URL.
2. Our backend agent scrapes images, copy, and structure.
3. **AI Engine** generates a "Miami-Modern" version of that site instantly (30s) side-by-side with the original.
4. **CTA:** "I like this" -> Pricing/Chat.

### B. The Description Builder
1. User inputs a description: "I own a vegan bakery in Brickell. I sell custom cakes and want people to order."
2. AI generates a fully structured marketing site (menu, about, booking).
3. **CTA:** "Launch this business."

## 4. Core Features

### A. The "Instant Prototype"
*   **Visual Style:** High-end tech aesthetic (sleek black/white) with vibrant Miami accents (gradients/energy).
*   **Speed:** Generation must be under 30-60 seconds.
*   **Editing:** Basic on-page editing via the prototype interface ("Click to edit your text").

### B. Generative SEO (GSEO)
*   **Standard SEO:** Semantic HTML, auto-meta tags, image optimization (WebP).
*   **LLM Optimization:** The site must be structured with **Schema.org JSON-LD** specifically tailored for AI chatbots so your client appears in the "AI Answer" for queries like "Best vegan bakery in Miami".

### C. "The AI Marketing Agent" (Upsell/Retainer)
*   Post-launch, the AI continues to work: auto-posts social updates, refreshes seasonal content, and generates monthly marketing reports.

## 5. Tech Stack Recommendations
*   **Frontend:** **Next.js + Tailwind CSS + Shadcn UI** (Fast, SEO-optimized, good for dynamic client inputs).
*   **Backend:** **Python (FastAPI)** (Handles LLM orchestration, web scraping, and prompt generation).
*   **Design Approach:** **Template Injection.** Instead of raw code generation (too unpredictable), AI fills pre-built, high-end "Miami-Modern" templates. Guarantees professional results.
*   **Hosting:** **Vercel** (Frontend) + **Render/Railway** (Python API).

## 6. Business Model
*   **Tier 1: Instant Setup ($297 one-time).** A stunning, AI-built prototype + SEO baseline.
*   **Tier 2: "AI Marketing Retainer" ($297–$500/month).** Recurring revenue. The AI agent continuously updates content, social, and ads.
*   **Tier 3: VIP Concierge ($2,000+ one-time).** Manual review and launch assistance by high-level humans.

## 7. Visual Identity
*   **Vibe:** "Miami Modern." Sleek, confident, high-energy.
*   **Copy Tone:** Direct, slightly provocative. "Your competitor sleeps. We build in our sleep."
