import { toTheme } from '@theme-ui/typography'
import legibleTheme from 'typography-theme-legible'
import merge from 'lodash.merge'
import { deep } from '@theme-ui/presets'


const typography = toTheme(legibleTheme)

const heading = {
    fontFamily: 'Merriweather, sans-serif',
    lineHeight: 'heading',
    fontWeight: '700',
    color: 'text',
    letterSpacing: '-0.05em',
    textDecoration: 'none'
}

const body = {
    fontFamily: 'Fira Sans, sans-serif',
    lineHeight: '1',
    fontWeight: 'body',
    letterSpacing: '-0.02em',
    textDecoration: 'none',
    color: 'text'
}

export default merge(typography, {
    ...deep,
    colors: {
        ...deep.colors,
        blueHigh: '#12ACFD',
        background3: '#29457C'
    },
    forms: {
        label: {
            fontSize: 1,
            fontWeight: 'bold',
        },
        input: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        select: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        textarea: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        slider: {
            bg: 'muted',
        },
    },
    alerts: {
        primary: {
            color: 'text',
            bg: 'muted'
        },
        feedback: {
            color: 'text',
            bg: 'background'
        },
        error: {
            color: 'text',
            background: '#f3511f'
        }
    },
    buttons: {
        close: {
            color: 'text',
        }
    },
    badges: {
        primary: {
            color: 'text',
            bg: 'primary',
        },
        outline: {
            color: 'primary',
            bg: 'transparent',
            boxShadow: 'inset 0 0 0 1px',
        },
        circle: {
            color: 'text',
            bg: 'muted',
            borderRadius: '50%'
        }
    },
    px: [
        5, 10, 20, 25, 30
    ],
    fontSizes: [
        12, 14, 16, 18, 24, 32, 48, 64, 72,
    ],
    text: {
        heading: {
            ...heading,
            fontSize: 5,
        },
        h2: {
            ...heading,
            fontSize: 4,
        },
        h3: {
            ...body,
            fontSize: 3
        },
        symbols: {
            ...body,
            fontSize: 4
        },
        numbers: {
            fontFamily: 'Fira Sans, sans-serif',
            fontSize: 7,
            color: 'text'
        },
        day: {
            fontFamily: 'Ropa Sans, sans-serif',
            fontSize: 4,
            color: '#c00'
        },
        body: {
            ...body,
            color: 'text'
        },
        links: {
            ...body,
            textDecoration: 'none',
            listStyle: 'none'
        },
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
        },
    },
    styles: {
        ...deep.styles,
    },
    layout: {
        card: {
            borderRadius: '20px',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            minHeight: '450px',
            width: '350px'
        },
        dayContainer: {
            position: 'relative',
            top: '50%',
            left: '10%',
            transform: 'translate(50%,-50%)',
            zIndex: '2',
            bg: 'ghostwhite',
            width: '15%',
            borderRadius: '10px',
            boxShadow: 'inset 0 2px 2px 0 rgba(0,0,0,.3), inset 0 -2px 2px 0 rgba(255,255,255,.2)',
            textAlign: 'center',
        },
        block: {
            borderRadius: '5px',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        NewsBlockCon: {
            margin: 1,
            display: 'flex',
            flexDirection: 'row',
            width: '850px',
            height: '100px',
            overflow: 'hidden',
            bg: 'background3',
            '&:hover .more': {
                top: '75%'
            }
        }

    },
})