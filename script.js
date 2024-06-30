const button=document.querySelector("button");
const joke=document.querySelector(".joke")


const getdadJoke =async()=>{
    try{
        let config={headers:{Accept : "application/json"}}
        let res=await axios.get("https://icanhazdadjoke.com/",config);
        console.log(res.data.joke);
        return res.data.joke;
    }
    catch(e){
        return("No Jokes Avaliable :(")
    }
    
}

button.addEventListener("click",async()=>{
    let newJoke=await getdadJoke();
    joke.innerText=newJoke;
})