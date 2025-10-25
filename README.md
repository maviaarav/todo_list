# Todo_list (React + Vite)

Short description: a simple task manager built with React and Vite. Mobile-first, responsive layout with client-side routing.

## Prerequisites
- Node.js (recommend LTS, e.g. 18.x or 20.x)
- npm (or yarn / pnpm)  
- macOS for iOS builds (optional)

## Environment setup
1. Clone the repo:
   - git clone <repo-url>
   - cd Todo_list
2. Install dependencies:
   - npm install
   - (or `yarn` / `pnpm install`)

## Run (development)
- npm run dev
- Open http://localhost:5173 (or the address Vite prints)

## Build (production)
- npm run build
- Preview: npm run preview

## Tests & lint
- Add or run test script (if present): npm test
- Lint: npm run lint

## Features
- Add / complete / delete tasks
- Separate views: All Tasks, Completed, Add Task (React Router)
- Responsive sidebar -> mobile hamburger + bottom nav
- LocalStorage persistence for todos
- FontAwesome icons support

## Key files & structure
- src/App.jsx — app root, router and state management
- src/side-menu.jsx — responsive sidebar and mobile nav
- src/home.jsx — All Tasks view
- src/Completed.jsx — Completed tasks view
- src/Form.jsx — Add task form
- src/index.html — add viewport meta for mobile

## Libraries used
- react, react-dom
- react-router-dom — routing
- @fortawesome/react-fontawesome + free icons — icons
- vite — dev server & bundler

## Mobile / responsive notes
- Viewport meta must be present: `<meta name="viewport" content="width=device-width, initial-scale=1" />`
- Sidebar hidden on small screens; hamburger and bottom nav shown via CSS media queries (max-width: 768px)
- Use min touch target ~44px for interactive elements
- Prefer rem units for scalable fonts and use flexible widths (width: 100%, max-width)
- Optional: package as native app with Capacitor (npm install @capacitor/core @capacitor/cli; npx cap init; build & add platforms)

## How this app was built (step-by-step template)
Use this section to record the exact steps you used — update answers below and I will insert them.

1. Create project
   - create-vite or npm init vite@latest
2. Install core deps
   - npm install react react-dom react-router-dom
3. Add dev tooling
   - npm install -D vite eslint prettier (if used)
4. Create main layout
   - Implement App.jsx with RouterProvider and routes
5. Implement components
   - side-menu.jsx (responsive)
   - home.jsx (list + complete handler)
   - Completed.jsx (completed list + delete handler)
   - Form.jsx (add task)
6. Add styles
   - Global CSS + side-menu.css with media queries
7. Add icons
   - npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
   - import and use FontAwesomeIcon
8. Persist state
   - Use localStorage, guard first render with useRef
9. Test & iterate on mobile layout
10. Optional: Capacitor packaging for native

## TODO / Notes
- Confirm Node version & package manager in README
- Add screenshots and example data
- Add CI / deployment instructions (Netlify / Vercel / GitHub Pages)
- Add tests and coverage commands

## Questions for you (please answer so I can finalize README)
1. Exact project name and short tagline to display at top?
2. Repo remote URL (for clone instructions)?
3. Which package manager do you use: npm / yarn / pnpm?
4. Which Node.js version did you use?
5. Do you want instructions for packaging as native apps with Capacitor?
6. Do you have test and lint scripts you want documented? (provide commands)
7. Do you want screenshots (I can add placeholders) and where are they stored?
8. Any deployment target (Vercel/Netlify)? Provide steps if yes.
9. Should I include a LICENSE file and author info?

Answer these and I will update README with exact commands, links, screenshots and final build notes.
