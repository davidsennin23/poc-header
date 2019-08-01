const theme = {
    colors: {
        main: '#26A65B',
        aux: '#006442',
    },
    fonts: {
        family: 'Helvetica, Arial, sans-serif',
        title: {
            size: '1.5em',
            weight: '500',
        },
        texts: {
            size: '0.9em',
            lineHeight: '1.3em',
        },
        menu: {
            size: '1.2em',
            weight: '700',
        }
   }
};

class ThemeLoader {

    loadTheme() {
        return theme;
    }

}

export default ThemeLoader;