# Prathyusha FinTech Innovation Team — React frontend

**Figma source:** [Complete Portal — Report v1, node 33:53](https://www.figma.com/design/Lr3p1WlqpWXgVklhNV3f9Z/Prathyusha-%E2%80%A2-FinTech-demo-1?node-id=33-53)

Runnable frontend project authored in **React 19 + TypeScript + Vite 6 + CSS + Lucide React**. It is a Figma-inspired interactive **demonstration**, not an authenticated production portal. It includes the maroon/cream/gold visual system, responsive navigation and sample records from the Figma file.

## Windows setup (VS Code)

1. Install **Node.js 22 LTS** from https://nodejs.org (or use Node.js 20.19+).
2. Extract this ZIP. Open the inner `fintech_figma` folder in VS Code.
3. Open **Terminal → New Terminal** and run:

```powershell
npm install
npm run dev
```

4. Open **http://localhost:5173** in your browser. The Vite terminal displays the exact URL if port 5173 is taken.

Or double-click `RUN_WINDOWS.bat` to install dependencies and start the dev server.

### Validate / production build

```powershell
npm run verify:source
npm run build
npm run preview
```

`npm run build` generates `dist/` for deployment to a static host. For client-side hash routing, no URL rewrites are needed.

## Screens and flows

The **Screen directory** (open `/#/directory`) provides navigation across 48 page routes / workflow entries. Core groups include:

- Public hub (`/#/home`), demo member login (`/#/login`), membership application (`/#/apply`), status (`/#/status`).
- Student overview (`/#/overview`), editable profile (`/#/profile`), project portfolio (`/#/projects`), project detail, individual contribution forms and history.
- Weekly update submission, mentor review queue, hackathon/team event records, certificate review.
- Coordinator dashboard, membership decisions, management reports, magazine editorial, article editor, publication approval, notifications and roles/audit.
- Eight Figma dashboard modules: delivery, contribution insights, weekly progress, hackathon operations, mentor command centre, coordinator overview, editorial and management insights.
- Public detail screens: project showcase, innovator profile, achievements, clarification and correction examples.

### Demo interactions

- Sidebar menu, route navigation, dashboard-directory search/filter, mobile navigation and Figma-inspired cards/tables.
- Membership form validation, browser-session draft, application status example, clarification response.
- Editable student profile, optional public visibility, local draft saving for module forms.
- Role selection for **demo navigation** only, review-draft forms, print/save PDF for reports.
- Read/unread demo notifications. All stats and verification statuses are **illustrative**.

## Security and scope (important)

This project **does not** have a live backend, database, OTP, login, protected upload, approval action, email delivery or genuine certification. The login page **does not authenticate**; do not enter actual passwords. The role selector grants access to demo screens only; it is not an access-control system. Decisions are previews/drafts, not live approvals.

Application data is held in **sessionStorage** for this browser tab/session; other module demo drafts also use **sessionStorage**, while profile preferences and demonstration notifications use browser **localStorage**. These mechanisms are not suitable for confidential real-user records. Before deployment for students, integrate real authentication, role-based authorization, secure backend validation, audit logging, consent, private storage and server-side workflows. Never store real passwords or government/college identifiers in browser storage.

The **official college logo** is not bundled: Figma supplied a temporary asset URL that could not be downloaded because this execution environment cannot resolve `www.figma.com`. The current logo component is an illustrative CSS/text fallback, **not the original official artwork**. To reproduce the design more accurately, export the official logo node (`34:76`) from Figma as an authorized PNG/SVG, put it in `src/assets/`, and replace the `Logo` component in `src/App.tsx` with that asset. Do not keep temporary Figma asset URLs in frontend code.

**Visual fidelity:** Main Figma desktop visual language, copy, design tokens and layout patterns are implemented. The huge `33:53` canvas contains numerous separate artboards, responsive previews and wireframes. This project provides responsive working interpretations of the product screens; it is **not a pixel-perfect conversion of every artboard**, especially the wireframe-only variations.

## Project layout

```
fintech_figma/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ RUN_WINDOWS.bat
├─ scripts/verify.cjs
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx            # shared layout / public hub / application / profile
│  ├─ PortalModules.tsx  # role-specific workflows, dashboards, screen directory
│  ├─ styles.css         # Figma-inspired styling and responsive rules
│  └─ assets/            # add official college logo here
└─ README.md
```

## Handoff checks

- Figma file: `Lr3p1WlqpWXgVklhNV3f9Z`, page node `33:53`
- Palette: maroon `#890C25`, dark `#351321`, cream `#FAF7F2`, gold `#E9BE72`, border `#E7DFDA`
- Source syntax verification: passed via TypeScript parser on App, PortalModules and main; internal route references verified.
- **Full `npm install` + Vite production build could not be run in the authoring environment** because the npm registry is unreachable there. On a Windows machine with internet, run the exact commands above to install and build, and report any console error for a fix.

