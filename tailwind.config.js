/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,jsx}"],
    daisyui: {
        themes: [{
            mytheme: {

                "primary": "#0FCFEC",

                "secondary": "#F000B8",

                "accent": "#3A4256",

                "neutral": "#3D4451",

                "base-100": "#FFFFFF",

                "info": "#3ABFF8",

                "success": "#36D399",

                "warning": "#FBBD23",

                "error": "#F87272",

                "link": "#19D3AE",

            },
        }, ],
    },
    plugins: [require("daisyui")],
}