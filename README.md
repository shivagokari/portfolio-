# Shiva Gokari Portfolio

Static personal portfolio for **Shiva Gokari** — Digital Marketing Specialist & Social Media Manager.

Frontend-only demo. No backend, no API, no Swagger, no cloud secrets in the repo.

---

## Quick start (localhost)

```bash
make dev
```

Open [http://localhost:5173](http://localhost:5173).

| Command | Description |
| --- | --- |
| `make install` | Install dependencies |
| `make dev` | Run local Vite server |
| `make build` | Production build |
| `make preview` | Preview production build |
| `make lint` | ESLint |
| `make clean` | Remove `node_modules` and `dist` |

Optional port: `make dev PORT=3000`

## Project structure

```text
.
├── Makefile                 # Local run shortcuts
├── public/                  # Static images & favicon
├── src/
│   ├── components/          # Page sections
│   ├── hooks/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Security posture

- **No secrets in repo** — `.env`, AWS credentials, and key files are gitignored
- **No backend / API surface** — this app does not expose REST endpoints, Swagger, or health routes
- **No GCP / Cloud Run URLs** — infra identifiers are not linked from the UI
- **No GitHub Actions / GCP deploy configs** in this project
- Contact links are intentional public portfolio info only (email, phone, LinkedIn)

This is a static Vite + React site. There is no `/health` (or any other) server endpoint to check.

## Tech stack

React 19 · TypeScript · Vite 8 · ESLint
