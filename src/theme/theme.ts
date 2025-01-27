import 'styled-components';

const theme = {
    borderRadius: '10px;',
};

export const dark = {
    ...theme,
    colors: {
        background: {
            primary: '#fb7247',
            secondary: '#f4523c',
            tertiary: '#000'
        },
        foreground: {
            onBackground: '#FFF',
            onSurface: '#222'
        },
        icon: '#FFF',
        borderColor: '#fb7247'
    },
};

export const light = {
    ...theme,
    colors: {
        background: {
            primary: '#f4523c',
            secondary: '#fb7247',
            tertiary: '#f0511d'
        },
        foreground: {
            onBackground: '#FFF',
            onSurface: '#222'
        },
        icon: '#000',
        borderColor: '#601cc7'
    },
};

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        colors: {
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
            },
            foreground: {
                onBackground: string;
                onSurface: string;
            },
            icon: string;
            borderColor: string;
        },
    }
}
