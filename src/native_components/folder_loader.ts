import fs from "fs"

class OSDocument{

	declare path:string
	declare content:string

	constructor(path: string){
		
		this.path = path
		fs.readFile(path, 'utf-8', (err, data) => {
			if(err){
				alert("An error ocurred reading the file :" + err.message);
				return;
			}
	
			// Change how to handle the file content
			console.log("The file content is : " + data);
			this.content = data
		});
	}
}

export {OSDocument}