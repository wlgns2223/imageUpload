import classNames from "classnames";
import react from "react";
import { Icon } from "../core/ui/icon/icon";

interface IIConContainer {
    iconClassNames?: string;
    containerClassNames?: string;
}

export const IconContainer: React.FC<IIConContainer> = ({
    containerClassNames,
    iconClassNames,
}) => {
    const containerclasses = classNames(
        "flex justify-center items-center",
        containerClassNames
    );
    const iconClasses = classNames("w-10 fill-icon stroke-2", iconClassNames);

    return (
        <div className={containerclasses}>
            <Icon icon="upload" className={iconClasses} />
        </div>
    );
};
