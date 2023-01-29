export class File {
    name: any;
    signed: boolean;
    constructor(name) {
        this.name = name;
        this.signed = false;
    }

    static isSigned = (document: File) => {
        return document.signed
    }
    static sign =(document: File) => {
        if(document.signed === false) return document.signed = true
        else throw new Error('Error, this document is already sign');
    }


}