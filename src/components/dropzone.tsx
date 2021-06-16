import React, {useCallback} from "react";
import { useDropzone } from "react-dropzone";


function FolderDropzone() {
	const onDrop = useCallback(acceptedFiles => {
		
		acceptedFiles.forEach((file:File) => {

		})

	}, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	return (
		<div {...getRootProps()}>
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