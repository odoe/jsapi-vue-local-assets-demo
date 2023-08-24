# ArcGIS Maps SDK for JavaScript with Vue and Vite

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with [Vite](https://vitejs.dev/guide/) using a [Vue.js](https://vuejs.org/) template.

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS.

_main.css_

```css
@import "https://js.arcgis.com/4.27/@arcgis/core/assets/esri/themes/light/main.css";
```

If using `<style scoped>` in your Vue component for css, do not import Esri themes here.
Should import them in a global css file that does not use scoped styles.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Production builds

See the [VueJS Deployment](https://cli.vuejs.org/guide/deployment.html#deployment) guide.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
