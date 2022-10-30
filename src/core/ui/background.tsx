import { Children } from "react";

interface IBackground {
    children: React.ReactNode;
}

export const Background: React.FC<IBackground> = ({ children }) => {
    return (
        <div className="bg-primary flex justify-center h-screen relative">
            {children}
        </div>
    );
};
