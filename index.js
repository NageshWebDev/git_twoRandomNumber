function randomNumber1(){
    var random = Math.random();
    random = (Math.floor(90 * random)+10);
    console.log("number is : "+random);
    return(random);
}

function randomNumber2(){
    var random = Math.random();
    random = (Math.floor(90 * random)+10);
    console.log("number is : "+random);
    return(random);
}

function display(){
    document.querySelector("#p1").textContent = randomNumber1() ;
    document.querySelector("#p2").textContent = randomNumber2() ;
}

document.querySelector("button").addEventListener("click", display);
