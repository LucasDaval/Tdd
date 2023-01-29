import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('remove all files test', () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  const fileName1 = "File#1";
  const file1 = new File(fileName1);

  const fileName2 = "File#2";
  const file2 = new File(fileName2);

  folder.addFile(file1);
  folder.addFile(file2);

  it("check if the removeAll method exists", () => {
    expect(folder.removeAll).toBeDefined();
  });

  it("check if removeAll had deleted all the file", () => {
    folder.addFile(file1);
    folder.removeAll();
    expect(folder.files).not.toContain(file1);
  });

  it("check if removeAll has been deleted the right file", () => {
    folder.addFile(file1);
    folder.addFile(file2);
    folder.removeAll();
    expect(folder.files).not.toContain(file2 || file1);
  });

  it("check folder is going to be empty after removeAll function", () => {
    folder.removeAll();
    expect(folder.files).toHaveLength(0);
  });
})