const reply = document.getElementById('reply');
const retweet = document.getElementById('retweet');
const like = document.getElementById('like');

const repbox = document.getElementById('repbox');
const retbox = document.getElementById('retbox');
const likebox = document.getElementById('likebox');
const conta = document.getElementById('conta');
const maincont = document.getElementById('maincont');


let repcount = 327;
let retcount = 92;
let likecount = 223;

repbox.innerHTML = repcount;
retbox.innerHTML = retcount;
likebox.innerHTML = likecount;

reply.addEventListener("click", function () {

    reply.disabled = true;
    var newbox = document.createElement("div");
    newbox.className = "newbox bg-dark my-2";
    conta.appendChild(newbox);

    var username = document.createElement("input");
    username.type = "text";
    username.className = "input-group bg-dark text-light username";
    username.placeholder = "@username...";
    newbox.appendChild(username);


    var userInput = document.createElement("input");
    userInput.type = "text";
    userInput.placeholder = "Write your tweet here...";
    userInput.className = "input-group bg-dark text-light userInput";
    newbox.appendChild(userInput);


    var sendbutton = document.createElement("button");
    sendbutton.className = "btn btn-info sendbutton";
    newbox.appendChild(sendbutton);
    sendbutton.style.float = "right";
    sendbutton.innerText = "Tweet!";


     sendbutton.addEventListener("click", function () {

        if (username.value != "" && userInput.value != "") {

            repcount++;
            repbox.innerHTML = repcount;
            newbox.style.display = "none";
            reply.disabled = false;


        }


    });
     retweet.addEventListener("click", function () {

        newbox.innerHTML = "";
        reply.disabled = false;

    });
     like.addEventListener("click", function () {

        newbox.innerHTML = "";
        reply.disabled = false;

    });




});

retweet.addEventListener("click", function () {


    if (retcount <= 92) {


        retcount++;
        retbox.innerHTML = retcount;
        retweet.className = "col-2 btn btn-secondary";


    } else {

        retcount--;
        retbox.innerHTML = retcount;
        retweet.className = "col-2 btn btn-info";


    }


});

like.addEventListener("click", function () {

    if (likecount <= 223) {


        likecount++;
        likebox.innerHTML = likecount;
        like.className = "col-2 btn btn-secondary";


    } else {

        likecount--;
        likebox.innerHTML = likecount;
        like.className = "col-2 btn btn-info";


    }


});