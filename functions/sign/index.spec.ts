import { signed} from "./index";

describe('Signing a document', () => {
    it('should return true because the "docA" document is signed', () => {
        expect(signed({name: 'docA', signed: true})).toBeTruthy()
    })
    it('should return false because the "docB" document is not signed', () => {
        expect(signed({name: 'docB', signed: false})).toBeFalsy()
    })
})