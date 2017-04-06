import React from 'react';
import { Container } from 'flux/utils';
import NoteAction from '../../actions/NoteAction';
import noteStore from '../../stores/noteStore';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import NoteList from '../../components/NoteList/NoteList';

class App extends React.Component {

  static getStores() {
    return [noteStore];
  }

  static calculateState() {
    return noteStore.getState();
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('App#componentDidMount');
    NoteAction.fetchNotes();
  }

  render() {
    console.group('App#render');
    console.dir(this.state);
    console.groupEnd('App#render');

    return (
      <div>
        <GlobalHeader />

        <main>
          <h2 className="App-PageTitle">pages / App</h2>
          <NoteList notes={this.state.notes} />
        </main>
      </div>
    );
  }
}

export default Container.create(App);
