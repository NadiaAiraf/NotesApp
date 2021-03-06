(function(exports) {

  function testList() {
    var noteList = new NotesList();
    assert.isTrue(noteList.list[0] === undefined && Array.isArray(noteList.list))
  }

  function testStoreNote() {
    var noteList = new NotesList();
    var note = new Notes("Aidan loves table tennis");
    noteList.storeNote(note)
    assert.isTrue(noteList.list.includes(note))
  }

  function testReturnNotes() {
    var noteList = new NotesList();
    var note = new Notes('asdfasdf');
    noteList.storeNote(note)
    assert.isTrue(noteList.returnNotes().includes(note))
  }

  function testReturn2Notes() {
    var noteList = new NotesList();
    var note = new Notes('asdfasdf');
    var note2 = new Notes('asdfasdf');
    noteList.storeNote(note)
    noteList.storeNote(note2)
    assert.isTrue(noteList.returnNotes().includes(note))
    assert.isTrue(noteList.returnNotes().includes(note2))
  }

  function testCreateAndStoreNote() {
    var noteList = new NotesList();
    noteList.createAndStoreNote('ayo');
    assert.isTrue(noteList.list[0].note === 'ayo')
  }

  testCreateAndStoreNote();
  testReturnNotes();
  testReturn2Notes();
  testList();
  testStoreNote();
})(this);
