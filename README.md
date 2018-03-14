# React with RequireJS

## What is it?

A [RequireJS](http://requirejs.org/docs/plugins.html) plugin which uses [Babel](https://babeljs.io) to allow you to write [React](https://reactjs.org/) apps with **no** build step, **no** Webpack, **not even** Node.js installed. Just you and a text editor, like in the old [jQuery](http://jquery.com/) days: write and run in the browser right away.

It has support to JS classes, decorators, and even [Redux](https://github.com/reactjs/react-redux). It's based on [this](https://github.com/mikach/requirejs-babel) and [this](https://gist.github.com/kenichi-odo/9fd4c1ee114082302df3f502c3b4bac1). Babel [presets and plugins](https://babeljs.io/docs/plugins/) are configurable.

## Why should I use it?

You shouldn't. This is an experimental project, more a proof-of-concept than a production tool.

However, it has been useful to me in situations where I wanted to write a small app really quick, and slow performance was tolerable; and also to some quick prototyping. So it's not completely useless, actually.

## How to use it?

See the examples.

### Configuration options

You can host `react-require.min.js` locally or use [RawGit CDN](https://rawgit.com/):

```js
requirejs.config({
  paths: {
    'jsx': 'https://cdn.rawgit.com/rodrigocfd/react-require/master/react-require.min'
  }
});
```

In particular, choice of Babel presets and plugins can be overriden. These are the default values:

```js
window.babelConfig = {
  presets: ['es2015', 'react'],
  plugins: ['transform-class-properties', 'transform-decorators-legacy']
};
```

Also, the libraries you are importing are defined in `requirejs.config()`.

All the configurations described above can be seen in an embedded `<script>` in the `index.html` files of the examples. You can extract this `<script>` into a separated JS file, if you want to.

## Caveats

1. Since we're loading all the JS files on-the-fly in the browser, the app will have a little lag before it's shown on the screen. That's the time needed for RequireJS to load all files, and Babel to process all of them.

2. The amount of bytes to be downloaded by the browser is much bigger than a properly compiled, minified, packaged app.

3. Since we're using production versions of React libraries, some validations, like `propTypes`, won't show up in the console. You can change these libraries to development versions though, at the cost of making the app even slower.

4. For local development in Google Chrome, to avoid cross-origin script blocking, run it [with the flags](https://stackoverflow.com/a/3177718/6923555) `--disable-web-security` and `--user-data-dir`.

## Why this monstrosity?

Because a friend of mine said it was not possible.

And it was fun to do.