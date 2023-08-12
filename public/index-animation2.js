// This is just a simple example of how to use JavaScript to add some interactivity to your page.

// When the page loads, we can use the `document.getElementById()` method to get a reference to the `header` element.
var header = document.getElementById("header");

// We can then use the `addEventListener()` method to add an event listener to the `header` element.
header.addEventListener("click", function() {
  // When the `header` element is clicked, we can use the `alert()` method to display a message.
  alert("Hello, world!");
});