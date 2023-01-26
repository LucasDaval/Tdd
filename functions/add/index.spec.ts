import {addDocuments} from "./index"

describe('tests d\'ajout d\'un document', () => {

    it('should return [] if document don\'t have name', () => {
        expect(addDocuments("")).toEqual([])
    })
    it('should return [\'Document.txt\'] if document name\'s is Document.txt', () => {
        expect(addDocuments("Document.txt")).toEqual(['Document.txt'])
    })
})