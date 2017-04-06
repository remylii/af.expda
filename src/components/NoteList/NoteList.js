import React from 'react';

export default class NoteList extends React.Component {

  renderItem(note) {
    return (
      <div key={note.id}>
        <h4>{note.id}:{note.title}</h4>
        <p>{note.body}</p>
      </div>
    );
  }

  render() {
    const items = this.props.notes.map(note => {
      return this.renderItem(note);
    });

    return (
      <div className="NoteList-section">
        {items}
      </div>
    );
  }
}
