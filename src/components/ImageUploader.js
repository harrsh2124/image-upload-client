import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ImageUploaderBG from "../assets/imageUploaderBg.svg";

const ImageUploader = (props) => {
    const { setFiles } = props;

    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });

    useEffect(() => {
        const files = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        if (files[0]) {
            setFiles(files);
        }
        // eslint-disable-next-line
    }, [acceptedFiles]);

    return (
        <div className="image_uploader_container">
            <p className="title">Upload your image</p>

            <p className="subtitle_one">File should be JPEG or PNG</p>

            <div
                className="input_container"
                {...getRootProps({
                    className: "dropzone",
                })}
            >
                <img className="input_bg" src={ImageUploaderBG} alt="Upload" />

                <div className="input_text">Drag & Drop your image here</div>

                <input {...getInputProps()} />
            </div>

            <p className="subtitle_two">or</p>

            <div className="submit_image_upload" onClick={open}>
                Choose a file
            </div>
        </div>
    );
};

export default ImageUploader;
