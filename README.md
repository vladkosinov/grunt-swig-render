# grunt-swig-render

> Grunt plugin for render Swig templates

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-swig-render --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-swig-render');
```

## The "swig_render" task

### Overview
In your project's Gruntfile, add a section named `swig_render` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  swig_render: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.vars
Type: `Object`
Default value: `{env: 'development'}`

Variables that are passed to templates

#### options.swigOptions
Type: `Object`
Default value: `'{}'`

[Swig Options Object](http://paularmstrong.github.io/swig/docs/api/#SwigOpts)

### Usage Examples

#### Render one file

```js
grunt.initConfig({
  swig_render: {
    files: {
      "dist/index.html" : "views/index.swig"
    }
  }
});
```

#### Render multiple files

```js
grunt.initConfig({
  swig_render: {
    expand: true,
    cwd: "views",
    ext: ".html",
    src: ["**/*.swig"],
    dest: "dist"
  }
});
```

In this example we render all files form ***views*** dir to ***dist*** dir.
Example: ***views/bla-bla/index.swig*** -> ***dist/bla-bla/index.html***

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
