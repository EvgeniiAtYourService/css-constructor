import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

export interface ISuperButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
}