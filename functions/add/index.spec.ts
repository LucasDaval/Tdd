import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('adding file test', () => {

    const folderName = "Folder#1";
    const folder = new Folder(folderName);

    const fileName = "File#1";
    const file = new File(fileName);


    it("check if the on the creation the folder have empty files", () => {
        expect(folder.files.length).toEqual(0);
    });

    //just to check if the new intern haven't deleted the function
    it("check if the addFile method exists", () => {
        expect(folder.addFile).toBeDefined();
    });

    it("check if addFile has been add a file", () => {
        folder.addFile(file);
        expect(folder.files.length).toEqual(1);
    });

    it("check if the file has correctly been add", () => {
        folder.addFile(file);
        expect(folder.files).toContain(file)
    })

    it("check if the file name has not a twin file in the folder", () => {
        folder.addFile(file);
        folder.addFile(file);
        expect(folder.files).toHaveLength(1);
    })
})