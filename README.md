acacia-confusa
=====================================
*Acacia confusa* is a perennial tree native to South-East Asia.

Built with [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)

---

### Getting up and running

1. Clone this repo
2. Run `npm install` from the root directory
3. Run `npm run dev`
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `npm run build` script (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `npm run dev` during development. More information below)

Now that `npm run dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---
