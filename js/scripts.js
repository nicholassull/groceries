$(document).ready(function() {
  $("#item-form").submit(function(event) {
    event.preventDefault();
    const itemArray = $("#item-list").val().split(",");
  })
});