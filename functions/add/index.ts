import {Doc} from "../../document";

export const addDocuments = (documentName: String): Doc => {
    if (documentName === "") {
        throw new Error("Please enter a document name!")
    }
    const newDoc = new Doc(documentName)

    return newDoc
}
