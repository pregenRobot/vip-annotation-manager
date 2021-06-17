import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel:string, data:any) => {
            ipcRenderer.send("msg_render_to_main", data);
        },
		on: (channel:string, func:any) => {
			ipcRenderer.on(channel, (event, ...args) => func(...args))
		}
    }
)