const prompt = require('prompt');
const maxChars = 280;

prompt.start();

prompt.get(['tweet'], function (err, result) {
    if (err) { return onErr(err); }
    let tweetText = result.tweet;
    let isLimited = LimitCheck(tweetText.length);
    let builtPhrase = PhraseBuilder(tweetText.length, isLimited);
    
    if(!isLimited){
        console.log("Valid tweet!");
        console.log(builtPhrase);
    }else{
        console.log("INVALID TWEET!!!");
        console.log(builtPhrase);
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}

function PhraseBuilder(tweetLenght, isLimited){
    let phrase;

    if (isLimited){
        phrase = "You have written " + tweetLenght + " characters, you have exceeded the character limit by " + ((maxChars - tweetLenght)*-1) + " characters."
    }else{
        phrase = "You have written " + tweetLenght + " characters, you still have " + (maxChars - tweetLenght) + " characters left."
    }
    return phrase;
}

function LimitCheck(tweetLenght){
    let result;

    if(tweetLenght > maxChars){
        result = true;
    }else{
        result = false;
    }
    return result;
}

