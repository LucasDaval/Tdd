import {addDocuments} from "./index"
import {Doc} from "../../document";

describe('tests d\'ajout d\'un document', () => {

    it('should return Error if document don\'t have name', () => {
        expect(addDocuments("")).toEqual(Error)
    })
    it('should return [\'Document.txt\'] if document name\'s is Document.txt', () => {
        expect(addDocuments("Document.txt")).toEqual({"name": "Document.txt", "signed": false})
    })
})