import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography';

export default defineConfig({
    /* configurations... */
    darkMode: 'class',

    //  Personal preference for defining custom attributes
    //  to style HTML elements.
    //  Can be done with classes, however it might get cluttered.
    //  More info here:
    //  https://windicss.org/posts/v30.html#attributify-mode
    attributify: {
        prefix: 'w:',
    },
    plugins: [
        typography({
            modifiers: ['Ubuntu'],
        }),
    ],
    theme: {
        extend: {

            fontFamily: {
                ubuntu: ['Ubuntu', 'sans-serif']
            },
        }
    },
})