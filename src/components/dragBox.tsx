import react, { useState } from "react";
import { IconContainer } from "./iconContainer";

interface IDragBox {
    setFileList: react.Dispatch<react.SetStateAction<FileList | null>>;
}

export const DragBox: React.FC<IDragBox> = ({ setFileList }) => {
    const handleFileList = (e: react.ChangeEvent<HTMLInputElement>) => {
        setFileList(e.currentTarget.files);
    };

    return (
        <div className="w-full rounded-lg border-4 border-dashed border-secondary h-36 bg-primary relative">
            <div className="flex justify-center items-center flex-col mt-4">
                <IconContainer />
                <p className="mt-4 text-lg text-secondary">
                    {"파일을 일루 드래그 하뗴욥 ㅎ_ㅎ"}
                </p>
            </div>
            <input
                onChange={handleFileList}
                multiple
                className="absolute top-0 bottom-0 left-0 right-0 z-10 opacity-0"
                type={"file"}
            />
        </div>
    );
};
