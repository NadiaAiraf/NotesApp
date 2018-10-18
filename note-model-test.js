import { Notes } from './note-model'
import { isTrue } from './assert.js'

function testNoteModel() {
  var note = new Notes('java sucks')
  isTrue(note.note === 'java sucks')
};

function testReturnText() {
  var note = new Notes('text')
  isTrue(note.returnText() === 'text')
}

testReturnText();
testNoteModel();
