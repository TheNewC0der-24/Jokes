// GET https://icanhazdadjoke.com/
const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// USING PROMISES
/*
const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com/', setHeader)
        .then((response) => response.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        }).catch((error) => {
            console.log(error);
        })
}
*/


// Using Async Await
const generateJokes = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const response = await fetch('https://icanhazdadjoke.com/', setHeader)
        const data = await response.json();
        jokes.innerHTML = data.joke;
    }

    catch (error) {
        console.log(`The error is ${error}`);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();



// Preloader
const loader = document.getElementById('loading');
function preLoader() {
    loader.style.display = "none";
}