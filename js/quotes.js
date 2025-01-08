const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela",
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
    },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        author: "African Proverb",
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
