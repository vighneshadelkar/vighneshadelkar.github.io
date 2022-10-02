const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");
getNotes().forEach(note => {
   const noteElement = createNoteElement(note.id, note.content);
   notesContainer.insertBefore(noteElement, addNoteButton); 
});
addNoteButton.addEventListener("click",() => addNote());
console.log("addNoteButton");
function getNotes() {
    return JSON.parse(localStorage.getItem("nap-notes") || "[]");
}
function saveNotes(notes) {
    localStorage.setItem("nap-notes" , JSON.stringify(notes));
}
function createNoteElement(id,content) {
    const element = document.createElement("textarea")
    element.classList.add("note");
    element.value = content;
    element.placeholder="empty";
    element.addEventListener("change", ()=> {
        updateNote(id, element.value);
    });
    element.addEventListener("dblclick", () => {
        const doDelete = confirm("are you sure??");
        if(doDelete) {
            deleteNote(id, element)
        }
    });
    return element;
}
function addNote() {
    getNotes();
    const noteObject = {
        id: Math.floor(Math.random()*100000),
        content:""
    };
    const noteElement=createNoteElement(noteObject.id , noteObject.content);
    notesContainer.insertBefore(noteElement,addNoteButton);
    notes.push(noteObject);
    saveNotes(notes);
}
function updateNote(id,newContent){
    const notes=getNotes();
    const targetNote = notes.filter(note=> note.id == id)[0];
    targetNote.content = newContent;
    saveNotes(notes);
}
function deleteNote(id,element) {
    const notes= getNotes().filter(note=> note.id != id);
    saveNotes(notes);
    notesContainer.removeChild(element);
}