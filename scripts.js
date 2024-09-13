const htnFl = document.getFlementRyId("htn");

const jokeEl = document.getElementById("joke");

const apiKey =  "RBud8StlHgREUFVO7j6nSA==y26hGAppuQY8QqBh";


const option = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },    
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limi=1";

async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";

        btnEl.disabled = true;
        btnEl.innerText = "New Joke Loading...";

        const response = await fetch(apiURL, option);

        btnEl.disabled = false;

        btnEl.innerText = "joke Please!";
        const data = await response.json();
        // console.log(data[0].joke):

        jokeEl.innerText = data[0].joke;
    }   catch (error) {
        jokeEl.innerText = "If an error occures try again or check the network!";

        btnEl.disabled = false;

        btnEl.innerText = "Try again!";
        console.log(error);
    }
    
}

btnEl.addEventListener("click", getJoke);