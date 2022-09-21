const collapserHeaders = document.querySelectorAll(".collapser-header");
collapserHeaders.forEach((collapserHeader) => {
  collapserHeader.addEventListener("click", (event) => {
    collapserHeader.classList.toggle("active");

    const collapserContent = collapserHeader.nextElementSibling;
    if (collapserHeader.classList.contains("active")) {
      collapserContent.style.maxHeight = collapserContent.scrollHeight + "px";
    } else {
      collapserContent.style.maxHeight = 0;
    }
  });
});
