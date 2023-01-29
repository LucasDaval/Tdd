import {File} from "../../class/File";

export const signed = (document: File) => {
    return document.signed
}
export const sign =(document: File) => {
    if(document.signed === false) return document.signed = true
    else return 'Error, this document is already sign'
}