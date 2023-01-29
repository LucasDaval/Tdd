import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('adding file test', () => {

    const folderName = "Folder#1";
    const folder = new Folder(folderName);

    const fileName = "File#1";
    const file = new File(fileName);

    const fileN = "FileTOTO";
    const fileTOTO = new File(fileN);

    folder.addFile(file);
    folder.addFile(fileTOTO);

    //just to check if the new intern haven't deleted the function
    it("check if the addFile method exists", () => {
        expect(folder.findFile).toBeDefined();
    });

    it("check if the addFile method find and return the file", () => {
        expect(folder.findFile(fileTOTO)).toEqual(fileTOTO);
    });

    it("check if the addFile method doesn't find and return a wrong file", () => {
        expect(folder.findFile(fileTOTO)).not.toEqual(file);
    });

    
})