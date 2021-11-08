$(document).ready(function() {
  $("#item-form").submit(function(event) {
    event.preventDefault();
    const itemArray = $("#item-list").val().split(",");
    let newArray = [];
    
    newArray = itemArray.map(function (element) {
      return element.trim().toUpperCase();
    });
    newArray.sort();

    newArray.forEach(function(element) {
      $("#grocery-list").append("<li>" + element + "</li>");
    });
  
  })
});