import type React from "react";
import type { JSX, ReactNode } from "react"

type TitleProps = {
    children: ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6 ;
}

const Title: React.FC<TitleProps> = ({children, level}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements
    return (
        <Tag className={`text-${level === 1 ? `2xl` : `xl`} font-bold mb-4`}>
            {children}
        </Tag>
    )
}

export default Title;