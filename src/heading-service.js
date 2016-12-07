export class HeadingService {
  setHeading(id, text) {
    document.getElementById(id).innerText = text;
  }

  getTimestamp() {
    return new Date();
  }
}