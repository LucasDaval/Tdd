import {Folder} from "../../class/Folder";
import {File} from "../../class/File";

describe('sort files in a folder ', () => {

  const folder1 = new Folder("Folder#1");
  const folder2 = new Folder("Folder#2");

  it('check if sort method exist', () => {
    expect(folder1.sort).toBeDefined()
  })
  it('should sort by alphabetic order is alpha given', () => {
    folder1.addFile(new File('Adoc'));
    folder1.addFile(new File('Cdoc'));
    folder1.addFile(new File('Bdoc'));
    expect(folder1.sort(folder1, 'alpha')).toEqual([{name: 'Adoc', signed: false}, {
      name: 'Bdoc',
      signed: false
    }, {name: 'Cdoc', signed: false}])
  })
  it('should sort by inverse of alphabetic order is !alpha given', () => {
    folder2.addFile(new File('Adoc'));
    folder2.addFile(new File('Cdoc'));
    folder2.addFile(new File('Bdoc'));
    expect(folder2.sort(folder2, '!alpha')).toEqual([{name: 'Cdoc', signed: false}, {
      name: 'Bdoc',
      signed: false
    }, {name: 'Adoc', signed: false}])
  })
})