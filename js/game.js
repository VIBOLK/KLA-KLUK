var output = document.getElementById("result");
var img = document.getElementById("ready");
var image = document.getElementById('image');
var game = () => {
    setTimeout(function(){
        let startNumber = 1;
        let endNumber = 6;
        output.style.display = "block";
        let afterMix = "";
        let mix = Math.floor(Math.random() * endNumber) + startNumber;
        if (mix == 1) {
            afterMix = "ខ្លា";
            image.src = "../images/tiger.jpg";
        } else if (mix == 2) {
            afterMix = "ឃ្លោក";
            image.src = "../images/kluk.jpg";
        } else if (mix == 3) {
            afterMix = "មាន់";
            image.src = "../images/hen.jpg";
        } else if (mix == 4) {
            afterMix = "បង្កង";
            image.src = "../images/sea.jpg";
        } else if (mix == 5) {
            afterMix = "ក្តាម";
            image.src = "../images/crab.jpg";
        } else {
            afterMix = "ត្រី";
            image.src = "../images/fish.jpg";
        }
        img.src = "";
        output.textContent = afterMix;
        console.log(afterMix);
        console.log(image);
    },600)
    setTimeout(function(){
        output.textContent = "";
        image.src = "";
        img.src = "../images/loading.jpg";
    },10)
}

let btn = document.querySelector("#mix");
btn.addEventListener('click', game);

