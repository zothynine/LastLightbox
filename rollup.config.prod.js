import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/js/lastlightbox.js',
    output: [
        {
            file: 'dist/lastlightbox.js',
            format: 'iife'
        },
        {
            file: 'dist/lastlightbox.min.js',
            format: 'iife',
            plugins: [terser()]
        }
    ],
    plugins: [json()]
};