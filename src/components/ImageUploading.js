import React from "react";
import LinearLoader from "./LinearLoader";

const ImageUploading = () => {
    return (
        <div className="image_uploading_container">
            <p className="heading">Uploading...</p>

            <LinearLoader />
        </div>
    );
};

export default ImageUploading;
