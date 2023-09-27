function rollTheDice(faces){
    let rand = Math.floor(Math.random()*faces);
    if (rand == 0) rand++;
    document.getElementById("rollResult").innerHTML = rand
    return rand;
}
