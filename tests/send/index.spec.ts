import {File} from "../../class/File";

describe('Sending an email', () => {

  const fileName = "File#1";
  const file = new File(fileName);

  it('check if sendFile method exist', () => {
    expect(File.sendFile).toBeDefined();
  })
  it('should return error because email is not valid', () => {
    try {
      File.sendFile(file, 'notAddressEmail');
    } catch (e) {
      expect(e).toEqual(new Error("email address is not valid"));
    }
  })
  it('should return true if a correct email is send', () => {
    expect(File.sendFile(file, "test@gmail.com"))
      .toEqual({success: 'the file has been sent successfully'});
  })
})