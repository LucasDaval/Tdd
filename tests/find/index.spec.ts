import {File} from "../../class/File";
import {Folder} from "../../class/Folder";

describe('find file test', () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  const fileName = "File#1";
  const file = new File(fileName);

  const fileN = "FileTOTO";
  const fileTOTO = new File(fileN);

  folder.addFile(file);
  folder.addFile(fileTOTO);

  it("check if the findFile method exists", () => {
    expect(folder.findFile(file.name)).toBeDefined();
  });

  it("check if the findFile method find and return the file", () => {
    expect(folder.findFile(fileTOTO.name)).toEqual(fileTOTO);
  });

  it("check if the findFile method doesn't find and return a wrong file", () => {
    expect(folder.findFile(fileTOTO.name)).not.toEqual(file);
  });


})