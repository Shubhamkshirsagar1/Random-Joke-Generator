const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";


const getJoke = () => {
    joke.classList.remove("fade");
    fetch(url)
    .then((response)=>{
       return response.json()
    })
    .then((data)=>{
        console.log(data.joke);

        joke.innerHTML = `${data.joke}`;
        joke.classList.add("fade");
        
    })
}


btn.addEventListener('click' , getJoke)