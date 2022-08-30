import React from "react";

const ImageUploaded = (props) => {
    const { imageLink } = props;

    const handleCopyLink = async () => {
        await navigator.clipboard.writeText(imageLink);
    };

    return (
        <div className="image_uploaded_container">
            <span className="icon">
                <i className="bi bi-check-circle-fill"></i>
            </span>

            <p className="title">Uploaded Successfully!</p>

            <img src={imageLink} alt="Uploaded" className="background_image" />

            <div className="image_link">
                <p className="link_text">{imageLink}</p>

                <div className="copy_image_button" onClick={handleCopyLink}>
                    Copy link
                </div>
            </div>
        </div>
    );
};

export default ImageUploaded;
