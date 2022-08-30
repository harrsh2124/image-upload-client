import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageUploaded from "./components/ImageUploaded";
import ImageUploader from "./components/ImageUploader";
import ImageUploading from "./components/ImageUploading";

const App = () => {
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [isImageUploading, setIsImageUploading] = useState(false);
    const [files, setFiles] = useState([]);
    const [imageLink, setImageLink] = useState("");

    const handleFileUpload = async (file) => {
        const body = new FormData();
        body.append("profilePhotoFile", file);

        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/upload`,
            body
        );
        setImageLink(response.data.data.secure_url);
        setIsImageUploaded(true);
    };

    useEffect(() => {
        if (files.length) {
            setIsImageUploading(true);
            handleFileUpload(files[0]);
        }
        // eslint-disable-next-line
    }, [files]);

    return (
        <div className="app container">
            {isImageUploaded ? (
                <ImageUploaded imageLink={imageLink} />
            ) : isImageUploading ? (
                <ImageUploading />
            ) : (
                <ImageUploader setFiles={setFiles} />
            )}
        </div>
    );
};

export default App;
