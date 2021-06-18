let mix = require('laravel-mix');
let path = require('path');

mix.setPublicPath(path.resolve('./'));

mix.postCss("resources/css/app.css", "css");

mix.options({
    postCss: [
        require('postcss-nested-ancestors'),
        require('postcss-nested'),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
});

mix.version();