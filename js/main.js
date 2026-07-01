console.log("JS動いてる");

const fadeElements = document.querySelectorAll(".fade");
console.log(fadeElements);

fadeElements.forEach(function(element){
  element.classList.add("show");
});
