# vue-latex

![License](https://img.shields.io/github/license/RichDom2185/vue-latex)

Render LaTeX in Vue components.

**Note:** This package is designed for Vue 3. Vue 2 support is not tested.

## Features/Roadmap

* Render LaTeX equations in Vue components
* ~~`Latex` component for rendering LaTeX equations~~ (Coming soon!)
* ~~Choose between KaTeX and MathJax for rendering LaTeX equations~~ (Coming soon!)

## Installation

### Step 1: Install the package

```bash
npm install vue-latex katex
```

Or if using yarn:

```bash
yarn add vue-latex katex
```

### Step 2: Import the package

```diff js
+ import 'katex/dist/katex.min.css';
import { createApp } from 'vue';
+ import VueLatex from 'vue-latex';
import App from './App.vue';

const app = createApp(App);
+ app.use(VueLatex);
app.mount('#app');
```

Note that you have to import the KaTeX CSS file for your browser to render LaTeX equations correctly. [Why doesn't the package do this for me?](#why-doesnt-the-package-import-the-katex-css-file-for-me)

This sets up a few things:

* The `$latex` global method is now available in your Vue components
* ~~The `Latex` component is now globally available~~ (Coming soon!)

## Usage

Simply use the `$latex` method in your Vue components to render LaTeX equations as raw HTML.

```vue
<template>
  <p v-html="$latex('E = mc^2')" />
</template>
```

## FAQ

### Why doesn't the package import the KaTeX CSS file for me?

This is done to maximize compatibility with your existing project setup. For example, Vite by default will block some transtive assets (like fonts) from being imported from `node_modules`. By requiring you to import the CSS file yourself, you can ensure that the CSS file is being loaded correctly.
