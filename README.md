# AGAR.IO — CellScape Arena

Browser-based cell arena with an Agar-style eat-and-grow loop, local progression and competitive mechanics.

## Included

- Responsive lobby and local profile
- FFA, Teams, Battle Royale and Experimental modes
- Cell movement, pellets, splitting and mass ejection
- Power-ups: Turbo, Shield, Magnet, Pulse, Frenzy and Dash
- Balanced speed curve: small cells are more agile without removing the mass advantage of large cells
- Slight small-cell pickup/growth advantage for pellets
- Daily reward streak
- XP, levels and level-up rewards
- Coins and DNA progression
- Three daily missions: Recolector, Superviviente and Cazador
- Match-end rewards based on activity, mass and eliminations
- Visible post-match reward summary
- Party-code UI
- Skins, emotes, statistics and settings
- Optimized canvas/minimap rendering for stable frame rate as the arena gets busier

## Growth and balance

Base pellet gain is 1.35 mass per point.

Small cells receive a modest agility multiplier and a small pickup bonus. The advantage is strongest below 70 mass and fades as the cell grows, so becoming large remains strategically valuable.

## Progression

Players earn XP and coins from completed matches. Levels require progressively more XP and grant additional coin rewards; every fifth level also grants DNA.

Daily missions reward additional XP and coins. A daily login reward builds a streak and increases its reward gradually.

## Run locally

Serve this directory with any static HTTP server and open index.html through the server.

Example:

    python -m http.server 4173 --bind 127.0.0.1

Then open http://127.0.0.1:4173/?v=4.