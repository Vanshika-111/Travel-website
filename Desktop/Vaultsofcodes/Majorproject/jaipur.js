function toggleSlide() {
  const content = document.getElementById("moreContent");
  const button = document.getElementById("readMoreBtn");

  content.classList.toggle("active");

  if (content.classList.contains("active")) {
    button.innerText = "Read Less";
  } 
  else {
    button.innerText = "Read More";
  }
}
