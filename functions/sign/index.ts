import {File} from "../../class/File";
export function signed(document: File) {
    return document.signed
}
export function sign(document: File) {
    if(document.signed === false) return document.signed = true
    else return 'Error, this document is already sign'
}