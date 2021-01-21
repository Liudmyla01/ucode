let animal = prompt ("What animal is the superhero most similar to?");
if(animal.length <= 20){
    let male = prompt ("Is the superhero male or female? Leave blank if unknown or other.");
    if(male == "male" || male == "female" || male ==""){
        let age = prompt ("How old is the superhero?");
        if ( male == "male" && age<18){
            alert(`The superhero name is: ${"\n"} boy- ${animal}`);
       }else if ((animal.length <= 20 ) && male == "male" && age>=18){
           alert(`The superhero name is: ${"\n"} man- ${animal}`);  
       }else if ((animal.length <= 20 ) && male == "female" && age<18){
           alert(`The superhero name is: ${"\n"} girl- ${animal}`);  
       }else if((animal.length <= 20 ) && male == "female" && age>=18){
           alert(`The superhero name is: ${"\n"} woman- ${animal}`);  
       }else if ((animal.length <= 20 ) && male == "" && age<18){
           alert(`The superhero name is: ${"\n"} kid- ${animal}`);   
       }else if ((animal.length <= 20 ) && male == "" && age>=18){
           alert(`The superhero name is: ${"\n"} hero- ${animal}`);
       }else{
           alert ("Error");
       }   
        
    } else {
        alert("Error");    
    } 
}else{
    alert("Error");
}
