module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pattern":"url('/src/asset/images/pat.png')"
      },
      translate:{
        "90":"90%",
        "74p":"74%"
      }
      
    },
  },
  plugins: [],
}