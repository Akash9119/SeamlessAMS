# SCRS Digital Ecosystem WordPress Theme

This theme is a thin wrapper around the React application in the `src/` directory of the project. It mirrors the structure of the `cas-prop` theme you shared.

## Installation

1. Build the React app:
   ```bash
   npm run build
   ```
2. Copy the contents of `dist` (or the build output) into the `themes/scrs-digital-ecosystem/assets` folder. The CSS/JS files should be named `index-<hash>.js` and `index-<hash>.css`.
3. Move `themes/scrs-digital-ecosystem` to your WordPress installation under `wp-content/themes/`.
4. Activate the theme in the WordPress admin.

## What the theme does

- Enqueues the generated JS and CSS files as modules/styles.
- Provides a basic `index.php` that renders a `<div id="root"></div>` for React.
- Includes `header.php` and `footer.php` with the necessary WP hooks.
- Loads the Google fonts and theme stylesheet.

## Customization

Modify the React app as usual; rebuild and redeploy assets to update the front end. You can also add PHP templates or additional functionality if needed.
