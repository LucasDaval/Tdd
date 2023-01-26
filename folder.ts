import {Doc} from "./document";

export class Folder {
    list: any;
    document: Doc;

    constructor() {
        this.list = []
    }
    public push(folder, doc){
        folder.push(doc)
    }
}

const base = new Folder()