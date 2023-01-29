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

    static sendFile =(document: File, EmailTo: string) => {
        // regex to see if Emailformat is correct
        const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(validEmail.test(EmailTo)){
            return true
        } else {
            throw new Error("l'adresse email n'est pas valide")
        }
    }


}