# Aiven

## Marketing site preview

A lightweight marketing landing page for the workflow automation platform lives under [`web/`](web/).

### Run locally

Because the page is static HTML/CSS/JS, you can serve it with any static file server. Two easy options:

1. **Using Python (preinstalled on most systems):**
   ```bash
   cd web
   python3 -m http.server 8080
   ```
   Then open <http://localhost:8080> in your browser.

2. **Using Node.js and `serve` (if you prefer npm tooling):**
   ```bash
   npm install --global serve
   serve web
   ```

Feel free to replace these commands with your own preferred static hosting solution or integrate the `web/` directory into an existing build pipeline.
