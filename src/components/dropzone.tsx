import React, {useCallback} from "react";
import { useDropzone } from "react-dropzone";
import "../styles/main.css"

declare const window: any;

function FolderDropzone() {
	const onDrop = useCallback(acceptedFiles => {
		
		acceptedFiles.forEach((file:File) => {
			console.log(file)
			window.api.send(file.path)
		})

	}, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	return (
		<div {...getRootProps()} className="dropzone">
			<input {...getInputProps()}/>
			{
				isDragActive?
				<p> Drop the files here ... </p> : 
				<p> Drag and drop some files here or click to select files </p>
			}
		</div>
	)
}

export default FolderDropzone