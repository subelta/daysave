declare module '*.jpg' {
    const src: string;
    export default src
}

declare module '*.jpeg' {
    const src: string;
    export default src
}

declare module '*.png' {
    const src: string;
    export default src
}

declare module '*.component.svg' {
    import * as React from 'react'

    const src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    // noinspection JSDuplicatedDeclaration
    export default src
}

declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    const src: string;
    export default src
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes
}
