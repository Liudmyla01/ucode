function superh( team, universe, race, eyeColor, hairColor){
    if ((team =="Avengers" || team=="S.H.I.E.L.D.") && universe == "Marvel" && race == "human" && eyeColor == "green" && hairColor == "lightBrown/green") {
        alert("This is Black Window!");
    } else if ((team == "Justice League Of Americ" || team == "Teen Titans") && universe == "DC Comics" && (race == "human" || race =="kryptionian") && eyeColor == "blue" && hairColor == "black"){
        alert("This is Superman or Robin!");
    }else {
        alert("Didn't recognize!");
    }
}
superh("Avengers", "Marvel", "human", "green", "lightBrown/green");
superh("Teen Titans", "DC Comics", "human", "blue", "black");
superh('');


