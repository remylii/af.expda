import test from 'ava';
import NoteApiClient from '../src/services/NoteApiClient';

test('NoteApiClient#fetchNotes returns 3 length data', async t => {
  const result = await NoteApiClient.fetchNotes();
  t.is(result.length, 3);
});
