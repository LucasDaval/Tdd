export class Doc {
    name: any;
    signed: boolean;
    constructor(name) {
        this.name = name;
        this.signed = false;
    }
}

export function signed(document: Doc) {
    return document.signed
}