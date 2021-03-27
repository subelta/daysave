import { Styles } from '../types'
import { ThemesEnum } from '../enums/themes'

export function pickThemedClassName(styles: Styles, theme: string): string {
    switch (theme) {
        case ThemesEnum.green: {
            return styles.green
        }
        case ThemesEnum.grey: {
            return styles.grey
        }
        case ThemesEnum.pink: {
            return styles.pink
        }
        case ThemesEnum.purple: {
            return styles.purple
        }
        case ThemesEnum.yellow: {
            return styles.yellow
        }
        default: {
            return styles.grey
        }
    }
}
