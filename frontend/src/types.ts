import { ThemesEnum } from './enums/themes'

// generic
export interface Styles {
    [className: string]: string
}

// app-specific
export interface Entry {
    date: string
    text: string
}

export interface Template {
    entries: Entry[]
    name: string
    theme: ThemesEnum
}
