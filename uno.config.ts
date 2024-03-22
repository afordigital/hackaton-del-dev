import { defineConfig, presetIcons, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      cBackground: '#161616',
      cPrimary: '#151515',
      cSecondary: '#2E2E2E',
      cTertiary: '#A8A8A8',
      cStrokeBox: '#767676',
      cWhite: '#EFEFEF',
      cGreenText: '#35D78B',
      cGreenButton: '#2F8F62',
      cGreenStroke: '#33CA86',
      cRed: '#EC3F3F'
    },
    dropShadow: {
      'customShadow': '0 0 48px rgba(115, 134, 125, 0.30)',
    }
  },
  shortcuts: {
    'title-gradient':
      'bg-gradient-to-r text-transparent bg-clip-text from-[#EEF1F0] to-[#555555]'
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: 'Inter'
      }
    }),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
