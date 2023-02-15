let secondName = "Molly";
    let myName = prompt("What is your name?");
    while(myName !== secondName){
        secondName = prompt(`${myName} doesnt match our record, please try again`);
    }
    alert(`Hello there ${secondName}`);


whodat();

setTimeout(function() { alert("You've been looking at cats for a while now..."); }, 10000);

