import { assert } from 'assert';

(function(exports) {
  function testListModel() {
    var notesList = new NotesList();
    var notesListView = new NotesListView(notesList);
    assert.isTrue(notesListView.view instanceof NotesList)
    }

  function testHTMLReturn() {
    var notesList = new NotesList();
    notesList.createAndStoreNote('ayo')
    notesList.createAndStoreNote('aidan')
    var notesListView = new NotesListView(notesList);
    var text = "<ul><li>ayo</li><li>aidan</li></ul>"
    assert.isTrue(notesListView.htmlReturn() === text)
  }

  testListModel();
  testHTMLReturn();
})(this);

class Mock9 {
  constructor(name, methods) {
    this.name = name
    this.method = {}
    for (var i = 0; i < methods.length; i++) {
      this.method[methods[i][0]] = methods[i][1]
    }
    return this.method
  }
}
