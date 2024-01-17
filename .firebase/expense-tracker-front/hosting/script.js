var coll = document.getElementsByClassName("card");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.getElementsByClassName("details")[0];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("open")
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open")
    }
  });
}