import {File} from "./File";

export class Folder {
  name: any;
  files: File[];
  archivedFiles: File[];


  constructor(name) {
    this.name = name;
    this.files = [];
    this.archivedFiles = [];
  }

  public addFile = (file: File) => {
    const isDuplicate = this.files.some((obj) => {
      return obj["name"] === file["name"];
    });

    if (!isDuplicate) {
      this.files.push(file);
    }
  }

  public deleteFile = (fileToDelete: File): boolean => {
    if (this.files.find(file => file === fileToDelete)){
      const index = this.files.indexOf(fileToDelete);
      this.files.splice(index, 1);
      return true;
    } else return false;
  }

  public archiveFile = (fileToArchive: File) => {
    if (!this.files.find(file => file === fileToArchive)) return false
      if(this.archivedFiles.push(fileToArchive)) {
        const index = this.files.indexOf(fileToArchive);
        this.files.splice(index, 1);
      }
  }

}