# Description

Using Tailwind CSS 2.2.0 and the PurgeCSS option might result in an infinite loop when watching for changes.

Specifically, when using a wildcard only content option.

```js
module.exports = {
    mode: 'jit',
    purge: {
        content: ['./*.php'], // infinite loop
        content: ['./partials/*.php'], // works
    }
}
```

# Steps to reproduce

* `npm install`
* `npx mix watch`