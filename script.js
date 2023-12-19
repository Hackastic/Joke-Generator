const jokeContainer = document.getElementById('joke-container');
const jokeElement = document.getElementById('joke');

const getJokeButton = document.getElementById('get-joke');

const generateButton = document.getElementById("generate-joke");

getJokeButton.addEventListener('click', () =>{
  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => response.json())
    .then(data => {
      const joke = data.joke;
      jokeElement.textContent = joke;
    })
    .catch(error => {
      console.error("Error fetching joke",error);
    });
});

generateButton.addEventListener("click", () => {
  
  fetch("https://hindijokes.apinepdev.workers.dev/")
      .then((response) => response.json())
      .then((data) => {
     
          const hindiJoke = data["hindi_Jokes"];

          
          jokeElement.textContent = hindiJoke;
      })
      .catch((error) => {
          console.error("Error fetching joke:", error);
      });
});

