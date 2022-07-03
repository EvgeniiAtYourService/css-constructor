import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface IDivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
    divCreated: boolean
    propertiesWindowShown: boolean
    showPropertiesWindow: (value: boolean) => void,
}