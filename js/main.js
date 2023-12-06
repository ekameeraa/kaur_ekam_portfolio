var elmntToView = document.getElementById("sectionId");
elmntToView.scrollIntoView();

$("p a").click(function (e) {
  e.preventDefault();
  var link = $(this).attr("href");
});

document.getElementById("home").addEventListener("click", scrollfunc);

function scrollfunc() {
  // code to be executed
  var elmntToView = document.getElementById("section1");
  elmntToView.scrollIntoView();
}
