import {Folder} from "../../class/Folder";
import {File} from "../../class/File";

describe('move file to another folder', () => {

    const folder1 = new Folder("Folder#1");
    const folder2 = new Folder("Folder#2");

    const fileName = "File#1";
    const file = new File(fileName);
    folder1.addFile(file)

    it('check if move method exist', () => {
        expect(Folder.move).toBeDefined()
    })
    it('should move file to folder 2', () => {
        Folder.move(file, folder2, folder1)
        expect(folder2.files).toEqual([file])
    })
    it('should delete file in folder1 if file move to folder2', () => {
        Folder.move(file, folder2, folder1)
        expect(folder1.files.length).toEqual(0)
    })
})