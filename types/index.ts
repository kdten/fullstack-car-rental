import { MouseEventHandler } from "react";

export interface CustomButtonPrps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}