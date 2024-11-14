import { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'
import UploadPresenter from "./upload.presenter";

export default function UploadContainer() {

    const [file, setFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        setFile(selectedFile)

        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setImageUrl(imageUrl);
        }
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        if (!file) {
            alert("파일을 선택해주세요")
            return;
        }

        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:8081/upload", formData, {
                // headers: {
                //     "Content-Type": "multipart/form-data",
                // },
            });
            console.log("파일 업로드 성공:", response.data)
        } catch(error) {
            console.error("파일 업로드 실패:", error)
        }
    }

    return (
        <UploadPresenter 
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            imageUrl={imageUrl}
        />
    )
}