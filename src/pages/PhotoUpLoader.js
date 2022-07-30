//by using class App extends components means that they are stateful componenets and can be
//updated and changed ?? So when creating a file that needs to have user access to upload requires a class base component? Function based componenets are stateless and they do not update any changes that are being applied to that particular component. ?? If I want my uploads page to be on the home page would I create a folder for the home file and add the uploads file to that Home folder vs pages folder? 

import axios from 'axios';
import React,{useState} from 'react';


const PhotoUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null)
        //removed setSelectedFile from above
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
                    GeeksforGeeks
                </h1>
                <h3>
                    File Upload using React!
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