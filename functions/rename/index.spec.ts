import {Folder} from "../../class/Folder";
import {File} from "../../class/File";

describe('rename a file', () => {

    const folderName = "Folder#1";
    const folder = new Folder(folderName);

    const fileName = "File#1";
    const file = new File(fileName);

    it('check if renameFile method exist', () => {
        expect(folder.renameFile).toBeDefined()
    })
    it('check if file name is File#1', () => {
        expect(file.name).toEqual('File#1')
    })
    it('name of file should be "fileRenamed"', () => {
        folder.renameFile(file, 'fileRenamed')
        expect(file.name).toEqual('fileRenamed')
    })

    it('check if renameFolder method exist', () => {
        expect(folder.renameFolder).toBeDefined()
    })
    it('check if folder name is Folder#1', () => {
        expect(folder.name).toEqual('Folder#1')
    })
    it('name of folder should be "folderRenamed"', () => {
        folder.renameFolder(folder, 'folderRenamed')
        expect(folder.name).toEqual('folderRenamed')
    })

})