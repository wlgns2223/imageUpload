import React, { useState } from "react";
import { Container } from "../core/ui/container";
import { DragBox } from "./dragBox";
import { List } from "./list/list";
import { Title } from "./title";

export const Main: React.FC = () => {
    const [fileList, setFileList] = useState<FileList | null>(null);
    return (
        <div className="p-4 rounded-xl bg-white shadow-lg w-full ">
            <Title />
            <Container>
                <DragBox setFileList={setFileList} />
            </Container>
            <Container>
                <p className="text-lg ">{"업로드 할 파일들"}</p>
            </Container>
            <Container>
                <button className="p-4 bg-primary w-full rounded-lg">
                    {"업로드"}
                </button>
            </Container>
            <Container>
                <List />
            </Container>
        </div>
    );
};
