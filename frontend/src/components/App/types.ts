import { ThemesEnum } from '../../enums/themes'

export interface Entry {
    date: string
    text: string
}

export interface Template {
    entries: Entry[]
    name: string
    theme: ThemesEnum
}
