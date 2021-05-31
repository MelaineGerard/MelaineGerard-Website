let mix = require('laravel-mix');

mix.setPublicPath("dist/")
mix.disableNotifications()
mix
    .sass("src/scss/style.scss", "dist/css/")
    .js("src/js/index.js", "dist/js/")