// Select variables

const getJokeBtn = document.querySelector(".get-jokes"),
      jokeCollection = document.querySelector(".jokes");

// Event Listener

const loadEvent = () => {
  getJokeBtn.addEventListener("click",getJokes);
}

const getJokes = (e) => {
  const inputValue = document.querySelector("#number").value;  // get input value

  const xhr = new XMLHttpRequest(); // Instantiate new obj

        xhr.open("GET",`http://api.icndb.com/jokes/random/${inputValue}`,true); // Send request

        xhr.onload = function() {
          if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = "";

            if(response.type === "success") {
              response.value.forEach((joke) => {
                output += `<li>${joke.joke}</li>`;
              });
            } else {
              output += `<li>Didn't get the joke, Something went wrong...</li>`;
            }
            jokeCollection.innerHTML = output;
          }
        }

        xhr.send();

        e.preventDefault();
}

// Invoke listener

loadEvent();
