# Flowers application (Frontend - Vue 3 application)

- This repository contains the code for the _Frontend_ application of the Flowers application.It is used to interact with backend, where APi is is provided on [SwaggerUI](https://flowrspot-api.herokuapp.com/doc/index.html).There is no CORS policy at this API, so no need for aditional proxy servers etc. For comunication woth server side, this application is using [axios](https://axios-http.com/) library.
- Also `vue-router` is instaled and rouring is working for : `Latest Sightings` and `Favorites` links in navigation.
- Mockup of the application is provided on [Figma](https://www.figma.com/file/94PDPTLqq2qBnMlmb7WTSU/FlowrSpot-Web?node-id=0%3A2) and for the fonts is chosen [Ubuntu](https://fonts.google.com/specimen/Ubuntu).It has no public `git repository`, only the local one.

  <br />

## Project structure

A highly opinionated structure for Vue 3 application, inspired by Nuxt.

<br />

## Project Features

- Build with [Vue 3](https://vuejs.org/guide/quick-start.html#with-build-tools) and [Vite 2](https://github.com/vitejs/vite) build with speed in mind.It replaces Babel / Wepback in the build chain of Vue (or any other Frontend) application.
  TypeScript is provided, in order to have a type safety support.

## Windicss

- [Windi CSS](https://github.com/windicss/windicss) Utility is CSS framework provided for styling. WindiCSS builds on top of [TailwindCSS](https://tailwindcss.com/) and provides additional functionality and developer experience. It boosts the styling by providing developers with predefined styles for most common UI elements.

## State Management

- State Management is defined using [Pinia](https://pinia.vuejs.org/).
  Pinia is a lighweight store implementation written in TypeScript. It inspired the Vuex 5.x re-implementation. Migration from Pinia to Vuex 5.x should be a straightforward, compared to Vuex 4.x to Vuex 5.x.

## Quick start

The _default_ / _main_ branch is set to `master`. <br />
`npm install` is needed to install all depenndencies. After instalation run `npx vite --port=4000` for application to start on default port `4000` or `npm run dev` for the port `3000`. In order to run unit testing run `npm run test:unit`.
