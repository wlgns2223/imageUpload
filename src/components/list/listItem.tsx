import react from "react";
import { Icon } from "../../core/ui/icon/icon";
import { IconContainer } from "../iconContainer";

export const ListItem: React.FC = () => {
    const file = new File(
        ["asdfasfasdfasdfasdfasdfasdfasldfja", "asdfjasldjfal;sdjflks"],
        "filenaasdfasdfasdfasdfasdfasdfasdfasdfasdfasfdmasdfasdfasdfasdfasdfasfe"
    );

    return (
        <div className="p-4 bg-primary rounded-lg flex items-center">
            <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-ellipsis overflow-hidden">{file.name}</p>
                <p className="overflow-hidden text-ellipsis mt-1">
                    {file.size}
                </p>
            </div>
            <div className="w-6 ml-2">
                <Icon icon="cancel" className="fill-secondary w-6" />
            </div>
        </div>
    );
};
