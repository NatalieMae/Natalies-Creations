import axios from 'axios';
import React,{useState} from 'react';


const PhotoUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null)

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    } 

    const onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            selectedFile,
            selectedFile.name
        );
        axios.post("api/uploadfile", formData);
    }

    const fileData = () => {
        if (selectedFile) {
            const {name, type, lastModifiedDate} = selectedFile

                return (
                
                    <div>
                        <h2>File Details:</h2>    
                        <p>File Name: {name}</p>
                        <p>File Type: {type}</p>
                        <p>
                            Last Modified:{" "}
                            {lastModifiedDate.toDateString()}
                        </p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <br />
                        <h4>Choose before Pressing the Upload button</h4>
                    </div>
                );
            }
        }

        return (
            <div>
                <h1>
                    Photos By Natalie 
                </h1>
                <h3>
                    Upload current Pictures 
                </h3>
    
                <div>
                    <input type="file" onChange={onFileChange} />
                    <button onClick={onFileUpload}>
                        Upload!
                    </button>
                </div>
                {fileData()}
            </div>
        )    
}

export default PhotoUploader;