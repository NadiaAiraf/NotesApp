(function(exports) {
  function NotesListView(view) {
    this.view = view
  }

  NotesListView.prototype.htmlReturn = function () {
    var text = "<ul>"
    for (var i = 0; i < this.view.returnNotes().length; i++) {
      text = text + "<li>" + this.view.returnNotes()[i].note + "</li>"
    }
    text = text + "</ul>"
    return text
  };

  exports.NotesListView = NotesListView;
})(this);
