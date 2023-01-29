import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('adding file test', () => {

    const folderName = "Folder#1";
    const folder = new Folder(folderName);

    const fileName = "File#1";
    const file = new File(fileName);


    it("check if on the creation of the folder it has empty files", () => {
        expect(folder.files.length).toEqual(0);
    });

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
    });

    it("check if the file name has not a twin file in the folder", () => {
        folder.addFile(file);
        folder.addFile(file);
        expect(folder.files).toHaveLength(1);
    });

    it("check if we can add 2 different files in same folder ", () => {
        folder.addFile(file);
        folder.addFile(new File("File#2"));
        expect(folder.files).toHaveLength(2);
    });
})