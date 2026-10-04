# Changelog

## 2026-10-05

- Added the CellScape browser arena to main.
- Increased base pellet growth from 1.15 to 1.35 mass per point.
- Increased Frenzy pellet growth from 2.25 to 2.55 mass per point.
- Added small-cell agility and a modest pellet pickup bonus.
- Added persistent XP, levels, coins and DNA progression.
- Added daily reward streaks and three daily missions.
- Added match-end rewards and a post-match reward summary.
- Preserved the performance optimizations and Battle Royale zone mechanic.
- Increased the active pellet count to 3,200.
- Increased local respawn bias to 90%.
- Added continuous hot-zone replenishment for players so a cleared area is repopulated automatically.
- Added local-biased pellet respawning so active areas stay populated and players can keep progressing.
- Validated 60 FPS with 63 cells and 3,200 pellets in the local stress test.
- Kept generated screenshots, browser profiles and local backups out of the repository.\n- Tuned pellet growth to feel faster in early game: 2.2 base mass below 100 mass, 1.9 below 250, 1.65 below 600, and 1.45 above that, plus the existing small-cell pickup bonus.\n- Validated growth from 25 mass to 150 mass after 51 pellet collections while maintaining 60 FPS.\n
- Added 58 persistent spiked hazards across the arena.
- Touching a spike with 60+ mass splits the player into two fragments, costs 10% of pre-hit mass, and starts a delayed gradual reunification.
- Added spike markers to the minimap.
- Removed the practical camera zoom floor so very large cells remain playable as mass grows without a cap.
