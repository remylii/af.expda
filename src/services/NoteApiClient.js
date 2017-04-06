const LATENCY = 200;

let notes = require('./data');

export default class NoteApiClient {
  static request(response) {
    console.log('services/NoteApiClient#request');
    return new Promise(resolve => {
      setTimeout(() => resolve(response), LATENCY);
    });
  }

  static wait() {
    return new Promise(resolve => setTimeout(resolve, LATENCY));
  }

  static fetchNotes() {
    console.log('Services/NoteApiClient#fetchNotes');
    return this.request(notes);
  }
}
