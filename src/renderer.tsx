import React from 'react';
import ReactDOM from 'react-dom';
import FolderDropzone from "./components/dropzone"

// const App: React.FC = () => <h1>Hello Electron!</h1>;

function App() {
	return (
		<div className = "container">
			<h1> Hello from React</h1>
			<h2> And don't forget Electron </h2>
			<h3> Here is the dropzone</h3>
			<FolderDropzone/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));