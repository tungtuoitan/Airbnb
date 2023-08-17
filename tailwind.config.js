/** @type {import('tailwindcss').Config} */
module.exports = {
  // important:true,

  content: [
    "./src/**/*.{html,js}",
    "./public/*.{html,js,css}",

],
  theme: {
    extend: {
      
      spacing: {
        '350': '350px',
        'c106':'106px',
        'c72':'72px',
        'c75':'75px',
        'c63':'63px',


        'c250':'250px',
        'c82':'82px',

        

        'c31': '31px',
        'c32': '32px',
        'c33': '33px',
        'c34': '34px',
        'c35': '35px',
        'c36': '36px',
        'c37': '37px',
        'c38': '38px',
        'c39': '39px',
        'c40': '40px',
        'c41': '41px',
        'c42': '42px',
        'c43': '43px',
        'c44': '44px',
        'c45': '45px',
        'c46': '46px',
        'c47': '47px',
        'c48': '48px',
        'c49': '49px',
        'c50': '50px',
        'c51': '51px',
        'c52': '52px',
        'c53': '53px',
        'c54': '54px',
        'c55': '55px',
        'c56': '56px',
        'c57': '57px',
        'c58': '58px',
        'c59': '59px',
        'c60': '60px',
        'c61': '61px',
        'c62': '62px',
        'c63': '63px',
        'c64': '64px',
        'c65': '65px',
        'c66': '66px',
        'c67': '67px',
        'c68': '68px',
        'c69': '69px',
        'c70': '70px',
        'c71': '71px',
        'c72': '72px',
        'c73': '73px',
        'c74': '74px',
        'c75': '75px',
        'c76': '76px',
        'c77': '77px',
        'c78': '78px',
        'c79': '79px',
        'c80': '80px',
        'c122': '122px',
        'c100': '100px',






        'c30':'30px',
        'c29':'29px',
        'c28':'28px',
        'c27':'27px',
        'c26':'26px',
        'c25':'25px',
        'c24':'24px',
        'c23':'23px',
        'c22':'22px',
        'c21':'21px',
        'c20':'20px',
        'c19':'19px',
        'c18':'18px',
        'c17': '17px',
        'c16': '16px',
        'c15': '15px',
        'c14': '14px',
        'c13': '13px',
        'c12':'12px',
        'c11':'11px',
        'c10':'10px',

        'c9':'9px',
        'c8':'8px',
        'c7':'7px',
        'c6':'6px',
        'c5':'5px',
        'c4':'4px',
        '3':'3px',
        'c-3':'-3px',
        'c2':'2px',
        'c1':'1px',


      },
      screens: {
        '5': '550px',
        '7': '745px',
        '9': '950px',
        '11': '1130px',
        '14':'1440px'
      },

      colors:{
        'gray7':'#717171',
        'gray-B0':'#B0B0B0',
        'gray-EA':'#EAEAEA',
        'gray-unknown': '#BEB5AA'

      },
      fontSize:{
        '12':'12px',
        'c10': '10px',
        'c15': '15px',
        'c14': '14px',
        'c30': '20px',



      }

      
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-debug-screens')
    
  ],
}

