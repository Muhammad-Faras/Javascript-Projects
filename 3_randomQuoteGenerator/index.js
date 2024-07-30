function generateQuote() {
    const quotes = [
        'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
        'The way to get started is to quit talking and begin doing. - Walt Disney',
        'Your time is limited, don’t waste it living someone else’s life. - Steve Jobs',
        'If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt',
        'If you look at what you have in life, you’ll always have more. - Oprah Winfrey'
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log('------------------');
    console.log(Math.floor(Math.random()));
    console.log('------------------');

    console.log(randomIndex);
    const randomQuote = quotes[randomIndex];

    const target = document.querySelector('#quote');

    target.innerHTML = randomQuote;
}
