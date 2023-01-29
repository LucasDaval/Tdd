import {Folder} from "../../class/Folder";
import {File} from "../../class/File";

describe("archive test", () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  const fileName = "File#1";
  const file = new File(fileName);
  folder.addFile(file);

  it("should have empty archives array", () => {
    expect(folder.archivedFiles.length).toEqual(0);
  })

  it("shouldn't find the selected file", () => {
    const file2 = new File("File#2");
    expect(folder.archiveFile(file2)).toBeFalsy();
  })

  it("should add the file selected in the archive folder", () => {
    folder.archiveFile(file);
    expect(folder.archivedFiles).toContain(file);
  })

  it("should delete the file selected in the file list", () => {
    folder.archiveFile(file);
    expect(folder.files).not.toContain(file);
  })

})