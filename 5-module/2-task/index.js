function toggleText() {
  let toggleButton = document.querySelector('.toggle-text-button');
  
  toggleButton.addEventListener("click", () => {
    document.querySelector('#text').toggleAttribute("hidden");
  });
}
