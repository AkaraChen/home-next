import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'

export default {
  plugins: [
    Unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Noto Sans Simplified Chinese',
            inter: 'Inter'
          },
        }),
      ],
    }),
  ],
}