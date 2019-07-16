let mix = require('laravel-mix');

require('laravel-mix-purgecss')

mix.postCss('src/tailwind.css', 'dist', [
  require('tailwindcss'),
])
.purgeCss({
  folders: ['templates'],
  extensions: ['html', 'twig'],
  whitelistPatterns: [/tw-bg-red-200/]
})
