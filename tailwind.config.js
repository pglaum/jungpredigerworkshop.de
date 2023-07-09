module.exports = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: [ 'Montserrat', 'sans-serif', ],
        },
        extend: {
            colors: {
                'san-juan': { DEFAULT: '#2E4B68', 50: '#BDD0E2', 100: '#AFC5DC', 200: '#93B1CF', 300: '#779DC3', 400: '#5A88B6', 500: '#4774A1', 600: '#3B5F84', 700: '#2E4B68', 800: '#23394F', 900: '#182736', 950: '#131E2A', },
                'hippie-blue': { DEFAULT: '#5789B0', 50: '#FFFFFF', 100: '#FEFEFE', 200: '#E2EAF1', 300: '#C6D7E4', 400: '#AAC3D7', 500: '#8FB0CA', 600: '#739CBD', 700: '#5789B0', 800: '#426C8D', 900: '#304F67', 950: '#274053', },
                'link-water': { DEFAULT: '#DAE9F4', 50: '#EAF2F9', 100: '#DAE9F4', 200: '#AFCFE7', 300: '#84B6DA', 400: '#589CCD', 500: '#3681B7', 600: '#2A628C', 700: '#1D4461', 800: '#102635', 900: '#03070A', 950: '#000000', },
                maize: { DEFAULT: '#F5D99A', 50: '#FEFCF7', 100: '#FCF5E4', 200: '#F9E7BF', 300: '#F5D99A', 400: '#F0C667', 500: '#EBB334', 600: '#D29815', 700: '#9F7310', 800: '#6C4E0B', 900: '#392906', 950: '#1F1703', },
                rajah: { DEFAULT: '#F4C16E', 50: '#FBEACD', 100: '#FAE1BA', 200: '#F7D194', 300: '#F4C16E', 400: '#F0AB3A', 500: '#E19211', 600: '#AD700D', 700: '#784E09', 800: '#442C05', 900: '#100A01', 950: '#000000', },
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['[data-theme=light]'],
                    primary: '#7F0101',
                    'primary-focus': '#6b0101',
                    'primary-content': '#ffffff',
                },
            },
            {
                dark: {
                    ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
                    primary: '#a70101',
                    'primary-focus': '#6b0101',
                    'primary-content': '#eeeeee',
                },
            },
        ],
    },
    plugins: [
        require('daisyui'),
    ],
}
