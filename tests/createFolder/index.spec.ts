import {Folder} from "../../class/Folder";

describe("create folder test", () => {

  const folderName = "Folder#1";
  const folder = new Folder(folderName);

  it("check has been correctly initialized", () => {
    expect(folder.name).toEqual(folderName);
    expect(folder.files).toHaveLength(0);
    expect(folder.archivedFiles).toHaveLength(0);
  });
})