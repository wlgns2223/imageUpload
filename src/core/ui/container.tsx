import react from "react";

interface IContainer {
    children?: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => {
    return <div className="mt-4">{children}</div>;
};
