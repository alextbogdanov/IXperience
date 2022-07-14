const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
];

// 1. GET RANDOM MOVIE

let randomNumber = Math.floor(Math.random() * (11)) + 1;
let movie = movies[randomNumber - 1];

// 2. DISPLAY MOVIE INFORMATION

let description = document.getElementById('description');
description.innerHTML = movie.explanation;

// 3. VERIFY INPUT

let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let guess = document.getElementById('guess').value;

    for(let i = 0; i < movies.length; i++) {
        let resultP = document.getElementById('result');

        if(guess.toLowerCase() == movie.title.toLowerCase()) {
            // CORRECT
            resultP.innerHTML = 'Correct answer!';
            resultP.classList.remove('alert-danger');
            resultP.classList.add('alert-success');
        } else {
            // INCORRECT
            resultP.innerHTML = 'Try again! Use a hint if you have to.';
            resultP.classList.remove('alert-success');
            resultP.classList.add('alert-danger');
        }
    }
})


// 4. SHOW HINT

let hintButton = document.getElementById('hint-button');

hintButton.addEventListener('click', (e) => {
    document.getElementById('hint').innerHTML = movie.hint;
})