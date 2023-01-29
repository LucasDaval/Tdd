import {File} from "../../class/File";
import {Folder} from "../../class/Folder";
import * as process from "process";

describe('duplicating file test', () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  const fileName1 = "File#1";
  const file1 = new File(fileName1);

  folder.addFile(file1);

  const numberFile = folder.files.length;

  it("check if the duplicateFile method exists", () => {
    expect(folder.duplicateFile).toBeDefined();
  });

  it("should return -1, when file to duplicate is not find", () => {
    const resultFunction = folder.duplicateFile(new File("Lorem Ipsum"));
    expect(resultFunction).toEqual(-1);
  })

  it("should return the 2, the new size of the array", () => {
    const numberOfFileAfterDuplication = folder.duplicateFile(file1);
    expect(numberOfFileAfterDuplication).toEqual(numberFile + 1);
  })


  it("check if a new file '-copy' exists", () => {
    folder.duplicateFile(file1);
    const isFind = folder.files.find(file => file.name === fileName1 + "-copy");
    expect(isFind).toBeTruthy();
  });

  it("check if the correct extension file has been pass", () => {

      const customExtension = "-duplicate";
      folder.duplicateFile(file1, customExtension);
      const isFind = folder.files.find(file => file.name === fileName1 + customExtension);
      expect(isFind).toBeTruthy();
    }
  )
})
