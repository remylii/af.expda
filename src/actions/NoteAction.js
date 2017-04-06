import { dispatch } from '../dispatcher';
import NoteApiClient from '../services/NoteApiClient';

export default class NoteAction {
  static fetchNotes() {
    console.log('NoteAction#fetchNotes');
    return NoteApiClient.fetchNotes().then(notes => {
      console.log('  > then');
      dispatch({ type: 'note/fetch', notes });
    });
  }
}
