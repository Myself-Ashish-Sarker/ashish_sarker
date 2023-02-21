/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",
            "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        dm_mono: "'DM Mono', monospace",
        montserrat: "'Montserrat', sans-serif"
      }
    },
    
  },
  plugins: [],
}
