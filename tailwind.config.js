/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./blog.html','./allpost.html','./test.html','./download.html'],
  theme: {
    
    extend: {
      fontFamily: {
        'gilroy1': [
          'Gilroy-Black',
          'Gilroy-BlackItalic',
          'Gilroy-Bold',
          'Gilroy-BoldItalic',
          'Gilroy-ExtraBold',
          'Gilroy-ExtraBoldItalic',
          'Gilroy-Heavy',
          'Gilroy-HeavyItalic',
          'Gilroy-Light',
          'Gilroy-LightItalic',
          'Gilroy-Medium',
          'Gilroy-MediumItalic',
          'Gilroy-Regular',
          'Gilroy-RegularItalic',
          'Gilroy-SemiBold',
          'Gilroy-SemiBoldItalic',
          'Gilroy-Thin',
          'Gilroy-ThinItalic',
          'Gilroy-UltraLight',
          'Gilroy-UltraLightItalic',
        ],
      },
      backgroundImage: {
        'fclinear': 'linear-gradient(rgba(133, 207, 249, 1), rgba(53, 52, 106, 1))',
        'fcfooter': 'linear-gradient(180deg, #7BBCE8 0%, #35346A 85.94%);'
      },

      maxHeight: {
        '128': '32rem',
      },

      minHeight: {
        '2/3': '80%',
      },

      colors: {
        'btn-blue': '#8CF2F2',
        'btn-sea': "#90ABEF" ,
        'btn-pink': "#EA88E6" ,
      },
      fontSize: {
        'fcxl': '2.8rem',
      },

      screens: {
        'fcsupermini': '400px',
        'fcmini': '543px',
        'navappear': '892px',
        'p2appear':'866px',
        'fcm': '890px',
        'fclg': "996px",
        'fcxl': '1160px',
        
      },
      backgroundColor: {
        'fclightblue': '#85CFF9',
        'fcblue':'#35346A',
      },
      textColor: {
        'fclightblue': '#85CFF9',
        'fcblue':'#35346A',
        'fcgray':'#808080',
      },
      borderColor: {
        'fclightblue': '#85CFF9',
      },
      
    }
  },
  plugins: [
  ],
}