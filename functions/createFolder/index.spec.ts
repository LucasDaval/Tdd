import {Folder} from "../../class/Folder";

describe("create folder test", () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  it("check if the folder has been created with the correct name", () => {
    expect(folder.name).toEqual(folderName);
  });
})