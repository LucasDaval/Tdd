export const addDocuments = (docName: string): Array<string> => {
    let arrayOfDocs = []
    if (docName === "") {
        return arrayOfDocs
    }
    arrayOfDocs.push(docName)

    return arrayOfDocs
}
