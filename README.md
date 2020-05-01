# svelte-tailwindcss-template

This is a starter template using Svelte and TailwindCSS.

This template overwrites the default tailwindcss color palette with the material design color palette. The colors can be found and modified in materialPalette.js

tailwind is set up as a svelte preprocess. That means that on build all the tailwind classes are put into the bundle.css file. Consequently, Postcss is also installed and purgecss is used to remove unused classes.

This template also has autoprefixer which automatically adds vendor specific css prefixes.

tailwindcss-bg-alpha creates background color classes that also have alpha variants. You have to specify what colors to generate these classes for in the tailwind.config.js file

The dark mode uses the tailwindcss-dark-mode package and I set up a store to use it from anywhere in your app. The darkMode store has turnOn() to turn dark mode on and turnOff() to turn dark mode off.

I also included svelte-media because it is so usefull for making mobile friendly svelte apps. I set up the default watchMedia store to use the tailwindcss breakpoints.

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.
