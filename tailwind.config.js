/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'vhs-effect': "url('https://img.freepik.com/free-photo/black-glitch-effect-texture_53876-94626.jpg?t=st=1714972882~exp=1714976482~hmac=c95675f9f07396c7fbdf1e3a1f9700cbfcc069825e7cfdc19cc47bfe91c146a3&w=1380')",
      },
      colors: {
        'main-color': '#fdfdfd',
      },
      height: {
        'screen-10' : '10vh',
        'screen-20' : '20vh',
        'screen-30' : '30vh',
        'screen-40' : '40vh',
        'screen-50' : '50vh',
        'screen-60' : '60vh',
        'screen-70' : '70vh',
        'screen-80' : '80vh',
        'screen-90' : '90vh',
        'screen-100' : '100vh',
        'screen-110' : '110vh',
        'screen-120' : '120vh',
        'screen-130' : '130vh',
        'full-50' : '110%',
        'scene-3' : '42%',
        'scene-4' : '90vh',
        'scene-4-1' : '700px',
        'image-scene-4' : '400px',
        'image-scene-5' : '850px',
        'image-scene-5-adaptive' : '500px',
        'image-md' : '300px',
        'image-scene4-md' : '550px',
        'image-sm' : '200px',
        'scene-4-sm' : '400px',
        'last-image-sm' : '300px',
      },
      maxHeight: {
        'cards': '650px',
        'bg-cards': '750px',
        'footer' : '520px',
        'scene-2' : '1065px',
        'scene-3' : '970px',
        'footer' : '520px',
        'text-bg-cards' : '250px',
        'scene-3-adaptive' : '1000px',
        'footer-adaptive' : '800px',
        'scene-1-md' : '1400px',
        'scene-1-sm' : '1000px',
        'footer-sm' : '400px',
        'last-image-sm' : '300px',
        'last-image-lg' : '900px',
      },
      width : {
        'last-image-sm' : '300px',
      },
      minHeight: {
        'cards' : '600px',
        'screens' : '970px',
        'screens-4' : '1700px',
        'scene-2-lg' : '2320px',
        'footer-adaptive' : '800px',
        'scene-1-md' : '1400px',
        'scene-1-sm' : '1000px',
        'screens-4-sm' : '1400px',
        'screen-last-sm' : '1000px',
        'footer-sm' : '400px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      lineHeight: {
        '50': '100px',
        '35': '75px',
      },
      width: {
        'cards': 'calc(33% - 10px)',
        'rating' : '116px',
      },
      fontSize: {
        'cards' : '0.8rem',
        '5.5' : '3.5rem',
      },
      inset: {
        'dot' : '11px',
        'image' : '40%',
        'image-adaptive' : '50%',
        'shadow-x' : '40%',
        'shadow-y' : '115%',
      },  
      boxShadow: {
        'image-scene-4-1': '0 -5px 40px 0px rgba(0, 0, 0, 0.2)',
      },
      blur: {
        'max' : '350px',
        'max-2' : '200px',
      }
    },
  },
  plugins: [],
}

