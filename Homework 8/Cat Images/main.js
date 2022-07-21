const url = 'https://api.thecatapi.com/v1/images/search';

async function getRandomImage() {
    const res = await fetch(url, {
        method: "GET"
    });

    const data = await res.json();

    let image = document.getElementById('image');
    image.src = data[0].url;
}

let button = document.getElementById('generate-button');

(function() {
    getRandomImage();
})();

button.addEventListener('click', () => {
    getRandomImage();
})