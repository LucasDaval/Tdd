import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('duplicating file test', () => {

    const folderName = "Folder#1";
    const folder = new Folder(folderName);

    const fileName1 = "File#1";
    const file1 = new File(fileName1);

    folder.addFile(file1);

    console.log(folder);
    

    //just to check if the new intern haven't deleted the function
    it("check if the duplicateFile method exists", () => {
        expect(folder.duplicateFile).toBeDefined();
    });

    it("should return true if file exists", () => {
        expect(folder.duplicateFile(file1)).toBeTruthy();
        console.log(folder);
        
    })

    it("check if a new file '-copy' exists", () => {
        folder.duplicateFile(file1);
        expect(folder.findFile("File#1-copy"))
    });
})
