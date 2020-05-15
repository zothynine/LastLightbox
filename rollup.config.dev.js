import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'src/js/lastlightbox.js',
    plugins: [sourcemaps()],
    output: [
        {
            sourcemap: true,
            file: 'debug/lastlightbox.js',
            format: 'iife'
        }
    ]
};