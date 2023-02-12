let myname = '';

function whodat() {
    myname = prompt("What is your name?");
    let name = (myname);
    alert("Hello, " + name);
}

whodat();

setTimeout(function() { alert("You've been looking at cats for a while now..."); }, 10000);

