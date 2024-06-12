// Query selectors for elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup");
var addpopupbutton = document.getElementById("add-popup");
var cancelbutton = document.getElementById("Cancel");
var container = document.querySelector(".container");
var addbookbutton = document.getElementById("Add-Book");
var booktitle = document.getElementById("Book-title");
var bookauthor = document.getElementById("Book-Author");
var description = document.getElementById("Description");

// Show popup
addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Hide popup
cancelbutton.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Add book
addbookbutton.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${description.value}</p>
        <button class="delete-button">Delete</button>
    `;
    container.append(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Add delete functionality to the new delete button
    div.querySelector(".delete-button").addEventListener("click", function() {
        container.removeChild(div);
    });
});

// Delete book
document.querySelectorAll(".delete-button").forEach(button => {
    button.addEventListener("click", function() {
        var bookContainer = button.parentElement;
        container.removeChild(bookContainer);
    });
});
