import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/js/lastlightbox.js',
    watch: false,
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
    plugins: [json(), babel()]
};