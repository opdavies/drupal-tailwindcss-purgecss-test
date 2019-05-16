let mix = require('laravel-mix');

require('laravel-mix-purgecss')

mix.postCss('src/main.css', 'dist', [
  require('tailwindcss')('./tailwind.config.js'),
])
.purgeCss({
  folders: ['templates'],
  extensions: ['html', 'twig']
})
