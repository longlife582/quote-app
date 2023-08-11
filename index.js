const div = document.querySelector(".content");
const btn = document.querySelector(".next");
const themeButton = document.querySelector(".dark");


themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

// console.log(theme)

btn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json(); 
    })
    .then(function(data) {
      const randomIndex = Math.floor(Math.random() * data.length); 
      const randomText = data[randomIndex].text; 
      const randomActor = data[randomIndex].author; 

      const text = document.createElement("p");
      text.textContent = `${randomText}`;

      const actor = document.createElement("h6");
      actor.textContent = `${randomActor}`;

      div.innerHTML = "";
      div.appendChild(text); // Corrected variable name to "text"
      div.appendChild(actor);
    })
    .catch(function(error) {
      console.error("Error fetching quotes");
    });
});









