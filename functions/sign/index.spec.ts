import { signed, sign } from "./index";

describe('Signing a document', () => {
    it('should return true because the "docA" document is signed', () => {
        expect(signed({name: 'docA', signed: true})).toBeTruthy()
    })
    it('should return false because the "docB" document is not signed', () => {
        expect(signed({name: 'docB', signed: false})).toBeFalsy()
    })
    it('should sign the docB', () => {
        expect(sign({name: 'docB', signed: false})).toBeTruthy()
    })
    it('should return error because docA is already sign', () => {
        expect(sign({name: 'docA', signed: true})).toEqual('Error, this document is already sign')
    })
})