import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface IDivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
    divCreated: boolean
}