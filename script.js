const jokes = document.getElementById('#joke')
const jokebtn = document.querySelector('#jokebtn');


const generateJokes  =async ()  =>{
    try{
const setHeader = {
     headers:{
    Accept:"application/json"
}
}
const res = await fetch('https://icanhazdadjoke.com',setHeader);
const data = await res.json();
joke.innerHTML=data.joke;

// fetch('https://icanhazdadjoke.com',setHeader)
// .then((res)=> res.json())
// .then(  (data) => {
//     joke.innerHTML=data.joke;
// })
//     .catch((error)=>{
//         console.log(error);})
    }catch(err){
        console.log(error);
    }

}
    jokebtn.addEventListener('click',generateJokes);
    generateJokes()