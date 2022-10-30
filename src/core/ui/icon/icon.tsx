import react from "react";
import { iconProps } from "./declaration";
import { TIconList, TSVG } from "./types";

interface IIcon extends TSVG {
    icon: TIconList;
    className?: string;
}

export const Icon: React.FC<IIcon> = ({ icon, ...props }) => {
    return <svg xmlSpace="preserve" {...iconProps[icon]} {...props} />;
};
