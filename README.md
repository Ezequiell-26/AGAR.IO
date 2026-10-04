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

The arena keeps 3,200 pellets active, respawns 90% of collected pellets near the player, and periodically refills the active hot zone when it gets depleted, keeping progression continuous without allowing the object count to grow indefinitely. Growth is intentionally front-loaded: below 100 mass, each pellet gives 2.2 base mass before the small-cell pickup bonus; the gain then steps down as the cell grows, keeping early progression fast while preserving the value of becoming large.

Small cells receive a modest agility multiplier and a small pickup bonus. The advantage is strongest below 70 mass and fades as the cell grows, so becoming large remains strategically valuable.

## Progression

Players earn XP and coins from completed matches. Levels require progressively more XP and grant additional coin rewards; every fifth level also grants DNA.

Daily missions reward additional XP and coins. A daily login reward builds a streak and increases its reward gradually.

## Run locally

Serve this directory with any static HTTP server and open index.html through the server.

Example:

    python -m http.server 4173 --bind 127.0.0.1

Then open http://127.0.0.1:4173/?v=4.

## Spike mechanic

The arena contains persistent spiked cells. Touching a spike with a sufficiently large player cell splits it into two smaller cells and removes 10% of the pre-hit mass. After a recovery delay, the two fragments gradually attract each other and merge back into one cell, preserving the post-hit mass instead of restoring the lost 10%.

Mass has no gameplay cap; the camera continuously zooms out as the cell grows so very large cells remain playable.

## Feel and movement tuning

- Early pellets now award substantially more mass so a player visibly grows after only a few pickups.
- Visual cell size interpolates toward real mass over time, avoiding abrupt jumps while preserving real collision/gameplay mass.
- Base movement speed was reduced to make steering feel less rushed while keeping small-cell agility.


## Control de fragmentos

Al pulsar **W**, la célula del jugador se divide en dos fragmentos que siguen simultáneamente el mismo cursor. Ambos conservan el control del jugador, pueden seguir recogiendo masa y, tras una ventana de separación, reciben una atracción de reagrupación hasta fusionarse de nuevo en una sola célula conservando la masa total del split. El minimapa identifica todos los fragmentos del jugador.
