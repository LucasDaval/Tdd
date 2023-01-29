import {File} from "../../class/File";

let docA = new File('docA');
docA.signed = true;
let docB = new File('docB');

describe('Signing a document', () => {
  it('should return true because the "docA" document is signed', () => {
    expect(File.isSigned(docA)).toBeTruthy();
  })
  it('should return false because the "docB" document is not signed', () => {
    expect(File.isSigned(docB)).toBeFalsy();
  })
  it('should sign the docB', () => {
    expect(File.sign(docB)).toBeTruthy();
  })
  it('should return error because docA is already sign', () => {
    try {
      File.sign(docA);
    } catch (e) {
      expect(e).toEqual(new Error('Error, this document is already sign'));
    }
  })
})