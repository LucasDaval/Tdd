import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('count file test', () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  const fileName = "File#1";
  const file = new File(fileName);

  const fileName2 = "File#2";
  const file2 = new File(fileName2);

  it("check if the countFile method exists", () => {
    expect(folder.countFile).toBeDefined();
  });

  it("check if on the creation of the folder with no files, countFile return 0, number of file", () => {
    expect(folder.countFile(folder)).toEqual(0);
  });

  it("check if we add 1 different files countFile return 1, number of file", () => {
    folder.addFile(file);
    expect(folder.countFile(folder)).toEqual(1);
  });

  it("check if we add 2 different files countFile return 2, number of files", () => {
    folder.addFile(file);
    folder.addFile(file2);
    expect(folder.countFile(folder)).toEqual(2);
  });
})