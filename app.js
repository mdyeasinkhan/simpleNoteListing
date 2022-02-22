showNotes()
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(){
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObject = []
    }else{
        notesObject = JSON.parse(notes)
    }
    notesObject.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObject))
    showNotes()
})

// Show all notes

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObject = [];
    }else{
        notesObject = JSON.parse(notes)
    }
    let div = "";
    notesObject.forEach(function(element, index){
        div += `<div class="card mx-4 my-4 newCard" style="width: 300px">
        <div class="card-body">
            <h5 class="card-title">${index +1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Remove</button>
        </div>
    </div>`
   let notesAll = document.getElementById("notes");
   notesAll.innerHTML = div
    });
    
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObject = [];

    }else{
        notesObject = JSON.parse(notes);                               
    }
    notesObject.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObject));
    showNotes();
}

let search = document.getElementById("searchText");

search.addEventListener("input", function(){
    let searchValue = search.value;
    let newCard = document.getElementsByClassName("newCard");
    Array.from(newCard).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;

        if(cardText.includes(searchValue)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})

