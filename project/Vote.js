// get user's DOB 
let input = prompt("What's your birthday (MM/DD/YYYY)?");

// DOB they need to be able to vote 
const d = new Date("10/18/2004");

// Today's date
// TODO look into the built-in date functionality 
const today = Date("10/18/2022");

// check date formatting & return an error if incorrect date formatting
// TODO parse the DOB for correctness and to read then compare with today's date 
function checkUserInput (input) {
    if (input != input.length(10)) {
        alert("Please enter a valid Date of Birth in the MM/DD/YYYY format.")
    }
}

// check age if over or under 18 as of today 
function ageToVote(input, d) {
    if (d<={input}) {
        // if over 18
        alert(`Since you are ${input} years old, you are allowed to vote!`);
    }

    if (d>={input}) {

    }
    
    else {
        //if younger than 18
        alert(`Since you are ${input} years old, you are not allowed to vote.`);
    }
};
