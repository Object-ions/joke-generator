const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = () => {
    if (this.readyState === 4) {
      console.log('Working click');
      console.log(this.responseText);
      // joke.innerHTML = JSON.parse(this.responText)
    }
  };
  xhr.send();
}

// Event listeners
jokeBtn.addEventListener('click', generateJoke);