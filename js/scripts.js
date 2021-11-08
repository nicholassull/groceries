$(document).ready(function() {
  $("#item-form").submit(function(event) {
    event.preventDefault();
    const itemArray = $("#item-list").val().split(",");
    let trimArray = [];
    
    trimArray = itemArray.map(function (element) {
      return element.trim();
    });
    console.log(trimArray);
  })
});