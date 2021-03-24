export const getParentsAttribute = (el: HTMLElement, parentTagName: string, attr: string): string => {
    let parent = el.parentElement

    while (parent && parent.tagName !== parentTagName) {
        parent = parent.parentElement
    }

    return parent?.getAttribute(attr) || ''
}
