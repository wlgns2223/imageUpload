/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#F7F9FF",
                secondary: "#B8BFD2",
                icon: "#5073B9",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
