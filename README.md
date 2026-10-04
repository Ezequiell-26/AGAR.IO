# AGAR.IO — CellScape Arena

Browser-based cell arena inspired by the classic eat-and-grow gameplay loop.

## Included

- Responsive lobby and local profile
- FFA, Teams, Battle Royale and Experimental modes
- Cell movement, pellets, splitting and mass ejection
- Power-ups: Turbo, Shield, Magnet, Pulse, Frenzy and Dash
- Party-code UI
- Skins, emotes, statistics and settings
- Optimized canvas/minimap rendering for smoother growth from small to large cells

## Run locally

Serve this directory with any static HTTP server and open `index.html` through the server.

Example:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/?v=4`.

## Growth tuning

Base pellet gain is tuned to `1.35` mass per pellet, with `2.55` while Frenzy is active, so collecting points produces a more noticeable but still controlled growth curve.