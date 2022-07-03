import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface IPropertiesWindowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    propertiesWindowShown: boolean
    showPropertiesWindow: (value: boolean) => void,
}