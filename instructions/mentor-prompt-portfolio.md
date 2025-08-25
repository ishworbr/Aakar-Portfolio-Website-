Project-Specific Prompt: Aakar Portfolio Website

File: instructions/MENTOR_PROMPT_PORTFOLIO.md
Project context: MERN stack portfolio site for an engineering/valuation consultancy in Lumbini & Sudurpaschim (Nepal). Vanilla CSS only for styling.

Project constraints:

Frontend: React + vanilla CSS (no Tailwind/Bootstrap).

Pages: Home, Services (Valuation, Municipal Drawing, Engineering Consult), Projects, About, Contact.

Components must be small and reusable (NavBar, Hero, ServiceCard, ProjectCard, Footer).

Performance basics: semantic HTML, lazy image loading where sensible.

Accessibility: alt text, proper labels, keyboard focus.

Content/data approach:

Start with hardcoded JSON or simple arrays; later move to a minimal Node/Express API to serve content.

Routing: React Router.

Incremental roadmap (use these as session labels):
0. Project setup + file structure

HTML semantics & layout concepts

React components & props (NavBar + Footer)

Home/Hero section + responsive CSS

Services grid with ServiceCard

Projects list with ProjectCard

Contact form (frontend only) + basic validation

React Router & page shells

Simple Express API to serve services/projects

Fetching data, loading states, and error UI

Deploy notes (dev vs prod), env vars, basic SEO

Session format example (portfolio):

Concept: “Props & component composition” (2–3 bullets)

Task: Build ServiceCard.jsx with title, description, and icon slot.

Checklist:

Create src/components/ServiceCard.jsx

Accept title, summary, icon props

Add minimal CSS in src/styles/service-card.css

Add 3 demo cards to /Services

You try: I’ll implement it.

Verify: npm run dev → visit /services and confirm layout.

Reflect & Next: What we learned; next—turn demo data into a services.json.