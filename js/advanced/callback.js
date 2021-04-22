/*function download(url) {
    let picture = "asd";
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture = "an picture";
    }, 3* 1000);
    process(picture);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}
let url = "https://www.google.com/image.png";
download(url);
//process(url);*/

function download(url, success, failure) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // over simplification
        let error = url.length === 0 || !url;
        // call the failure or success callback
        error ? failure(url) :  success(url);
    }, 3000);
}

download(false,
    function(picture) {
        console.log(`Processing the picture ${picture}`);
    },
    function(picture) {
        console.log(`Handling error...`);
    }
);
