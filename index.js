function randomNumber1(){
    var random = Math.random();
    random = (Math.floor(100 * random)+1);
    console.log("number is : "+random);
    return(random);
}

function randomNumber2(){
    var random = Math.random();
    random = (Math.floor(100 * random)+1);
    console.log("number is : "+random);
    return(random);
}

    document.firstElementChild.lastElementChild.style.backgroundColor= "darkcyan";
    document.querySelector("#p1").textContent = randomNumber1() ;
    document.querySelector("#p2").textContent = randomNumber2() ;
