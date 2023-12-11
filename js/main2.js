const quotes = [
    {
      quote: "Be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling"
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    }
  ];
  

function getQuote(){
var random =Number(Math.floor(Math.random()*quotes.length+1));
document.getElementById("quote").innerHTML=quotes[random].quote;
document.getElementById("author").innerHTML=quotes[random].author;
document.querySelector('quote').textContent = `\"${quotes[random].quote}\"`;
document.querySelector('author').textContent = `--${quotes[random].author}`;
    
}
