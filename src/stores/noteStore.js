import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class NoteStore extends ReduceStore {
  getInitialState() {
    return { notes: [] };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'note/fetch':
        console.log('NoteStore#note/fetch');
        console.dir(state);
        console.dir(action);
        return { notes: action.notes };

      default:
        return state;
    }
  }
}

export default new NoteStore(dispatcher);
