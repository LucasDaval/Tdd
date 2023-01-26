import {Folder} from "./folder";
const base = new Folder();
export class Doc {
    name: string;
    signed: boolean;
    emplacement: Folder;
    constructor(name, emplacement=base) {
        this.name = name;
        this.signed = false;
        this.emplacement = emplacement
        emplacement.push(emplacement,this)
    }

}

const docA = new Doc('docA')