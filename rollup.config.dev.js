import babel from 'rollup-plugin-babel';

const config = {
    input: 'src/js/lastlightbox.js',
    output: [
        {
            file: 'debug/lastlightbox.js',
            format: 'iife'
        }
    ],
    plugins: [babel()],
};

export default config;