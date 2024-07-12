function showJoke(response) {
  new Typewriter("#joke-answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
  });
}

function askJoke(event) {
  let apiKey = "06a75966f48t8e1bb0f5829fc38o234b";
  let prompt = "Tell a sarcastic joke";
  let context =
    "You are a comedian who has been telling sarcastic and satire jokes for years";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showJoke);
}

let tellJoke = document.querySelector("#my-button");
tellJoke.addEventListener("click", askJoke);
