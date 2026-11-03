# Guild Wars Today

A static Guild Wars reference site: skills, quests and missions, the skillbar builder, and the daily and
weekly rotations. No server and no build step; open `index.html` directly or serve the folder with
GitHub Pages.

## Layout

    *.html, style.css, common.js and one script per page             pages
    mapwidget.js, walkroute.js                                       maps and the route finder
    template-code.js                                                 template-code encode/decode
    game/            the game's data, keyed by the game's ids (see each section's "_" note)
    game/walk/       each area's walkable ground, as polygons
    data/            the site's own content: guides, builds, search aliases
    img/tiles/       the maps, cut into tiles; img/skills/, img/prof/: icons

The data files are the source: edit them by hand. `../tools/check_game.py` checks every pointer.

## License

Code: MIT (`LICENSE`). Data: CC BY-NC-SA 4.0, derived from GuildWiki.de and other sources
(`DATA-LICENSE.md`). Third-party and ArenaNet notices: `NOTICE.md`. The site shows all of this on
`license.html`.
