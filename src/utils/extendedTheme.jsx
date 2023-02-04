import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Lato', sans-serif`,
        body: `'Lato', sans-serif`,
    },
    colors: {
        primary: {
            blue: '#2F80ED',
            dark: '#4F4F4F',
            grey: '#828282',
            white: '#E0E0E0',
        },
        indicators: {
            orange: '#F8B76B',
            purple: '#8785FF',
            red: '#EB5757',
            yellow: '#F2C94C',
        },
        chats: {
            orange: '#E5A443',
            bgOrange: '#FCEED3',
            purple: '#9B51E0',
            bgPurple: '#EEDCFF',
            green: '#43B78D',
            bgGreen: '#D2F2EA',
        },
        stickers: {
            one: '#E9F3FF',
            two: '#FDCFA4',
            three: '#F9E9C3',
            four: '#AFEBDB',
            five: '#CBF1C2',
            six: '#CFCEF9',
            seven: '#F9E0FD'
        }
    }
})


export default theme;