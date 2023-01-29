import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('deleting file test', () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  const fileName1 = "File#1";
  const file1 = new File(fileName1);

  const fileName2 = "File#2";
  const file2 = new File(fileName2);

  folder.addFile(file1);
  folder.addFile(file2);

  it("check if the deleteFile method exists", () => {
    expect(folder.deleteFile).toBeDefined();
  });

  it("should return false if file doesn't exist", () => {
    expect(folder.deleteFile(new File("File#3"))).toBeFalsy();
  })

  it("check if deleteFile had deleted the file", () => {
    folder.deleteFile(file1);
    expect(folder.files).not.toContain(file1);
  });

  it("check if deleteFile has been deleted the correct file", () => {
    folder.deleteFile(file1);
    expect(folder.files).toContain(file2);
  })
})