import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('deleting file test', () => {

    const folderName = "Folder#1";
    const folder = new Folder(folderName);

    const fileName1 = "File#1";
    const file1 = new File(fileName1);

    const fileName2 = "File#2";
    const file2 = new File(fileName2);

    
    it("check if the on the creation the folder have empty files", () => {
        folder.addFile(file1);
        expect(folder.files.length).toEqual(1);
    });

    //just to check if the new intern haven't deleted the function
    it("check if the deleteFile method exists", () => {
        expect(folder.deleteFile).toBeDefined();
    });

    it("check if deleteFile has been deleted a file", () => {
        folder.addFile(file1);
        folder.deleteFile(file1);
        expect(folder.files.length).toEqual(0);
    });

    it("check if deleteFile has been deleted the right file", () => {
        folder.files.push(file1);
        folder.files.push(file2);
        folder.deleteFile(file1);
        
        expect(folder.files).toContainEqual(file2)
    })
})