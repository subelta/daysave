import React, { useCallback, useEffect, useState } from 'react'

import CancelIcon from 'Media/cancel.component.svg'
import DiskIcon from 'Media/disk.component.svg'
import PencilIcon from 'Media/pencil.component.svg'
import { TemplateSimple } from '../../../../../types'
import { ThemesEnum } from '../../../../../enums/themes'
import TrashIcon from 'Media/trash.component.svg'
import { pickThemedClassName } from 'Utils/themes'
import styles from './Template.module.css'

const THEMES = Object.values(ThemesEnum)

interface EditValues {
    input: string
    themeInd: number
}

type EditState = 'editing' | 'error' | 'not editing'

interface Props {
    currentTemplate: string
    templateNames: string[]
    thisTemplate: TemplateSimple

    onChooseClick: (templateName: string) => void
    onDeleteCLick: (templateName: string) => void
    onSaveClick: (newName: string, prevName: string, theme: ThemesEnum) => void
}

export const Template: React.FC<Props> = props => {
    const { currentTemplate, onChooseClick, onDeleteCLick, onSaveClick, templateNames, thisTemplate } = props
    const { name, theme } = thisTemplate

    const [editState, setEditState] = useState<EditState>('not editing')
    const [editValues, setEditValues] = useState<EditValues>({ input: name, themeInd: THEMES.indexOf(theme) })
    const [, setInputRef] = useState<HTMLInputElement | null>(null)

    const onSetRef = useCallback(ref => {
        setInputRef(ref)
        ref?.focus()
    }, [])

    useEffect(() => {
        if (currentTemplate !== name) {
            setEditState('not editing')
            setEditValues({ input: name, themeInd: THEMES.indexOf(theme) })
        }
    }, [currentTemplate, name, theme])


    const handleClick = useCallback(e => {
        const t = e.target
        const isPencil = t.classList.contains(styles.pencil) || t.parentElement.classList.contains(styles.pencil)
        const isTrash = t.classList.contains(styles.trash) || t.parentElement.classList.contains(styles.trash)

        if (isPencil) {
            setEditState('editing')
            onChooseClick(name)
        } else if (isTrash) {
            onDeleteCLick(name)
        } else {
            onChooseClick(name)
        }
    }, [name, onDeleteCLick, onChooseClick])


    const handleChange = useCallback(e => {
        const value = e.target.value
        if (editState === 'error' && value !== editValues.input) {
            setEditState('editing')
        }
        setEditValues(state => ({ input: value, themeInd: state.themeInd }))
    }, [editState, editValues.input])


    const handleKeyDown = useCallback(e => {
        if (e.key === 'Enter') {
            const { input, themeInd } = editValues
            const alreadyUsed = name !== input && templateNames.find(template => template === input)

            if (alreadyUsed || !input) {
                setEditState('error')
            } else {
                setEditState('not editing')
                onSaveClick(input, name, THEMES[themeInd])
            }
        }
    }, [editValues, name, onSaveClick, templateNames])


    const handleThemeClick = useCallback(() => {
        setEditValues(
            ({ input, themeInd }) => ({ input, themeInd: (themeInd + 1) % THEMES.length })
        )
    }, [])


    const handleDiskClick = useCallback(() => {
        const { input, themeInd } = editValues
        const alreadyUsed = name !== input && templateNames.find(template => template === input)

        if (alreadyUsed || !input) {
            setEditState('error')
        } else {
            setEditState('not editing')
            onSaveClick(input, name, THEMES[themeInd])
        }
    }, [editValues, name, onSaveClick, templateNames])


    const handleCancelClick = useCallback(() => {
        setEditState('not editing')
        setEditValues({ input: name, themeInd: THEMES.indexOf(theme) })
    }, [name, theme])

    return (
        <>
            {editState !== 'not editing' ? (
                <div className={styles.container} >
                    <span className={styles.templateInfo}>
                        <button onClick={handleThemeClick} style={{ cursor: 'pointer' }}>
                            <span
                                className={
                                    `${styles.colorSquare} ${pickThemedClassName(styles, THEMES[editValues.themeInd])}`
                                }
                            />
                        </button>
                        <input
                            className={`${styles.input} ${editState === 'error' ? styles.error : ''}`}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            ref={onSetRef}
                            value={editValues.input}
                        />
                    </span>
                    <span>
                        <button className={styles.diskBtn} onClick={handleDiskClick}>
                            <DiskIcon />
                        </button>
                        <button className={styles.cancelBtn} onClick={handleCancelClick}>
                            <CancelIcon />
                        </button>
                    </span>
                </div>
            ) : (
                <button
                    className={`${styles.containerBtn} ${currentTemplate === name ? styles.selected : ''}`}
                    onClick={handleClick}
                >
                    <span className={styles.templateInfo}>
                        <span className={`${styles.colorSquare} ${pickThemedClassName(styles, theme)}`} />
                        <span className={styles.templateName}>
                            {name}
                        </span>
                    </span>
                    <span>
                        <PencilIcon className={styles.pencil} />
                        <TrashIcon className={styles.trash} />
                    </span>
                </button>
            )}
        </>
    )
}
