
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";


async function getQuote(url){

    try{

      const response = await fetch(url);

      if(!response.ok){
        throw new Error("Http error! status: ${response.status}");
      }
  
      const data = await response.json();
  
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
      // return data;
      // console.log(data);
    }

    catch(error){
      console.error("Error fetching quote:", error);
    }
    
}

getQuote(apiUrl);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---" + author.innerHTML, "Tweet Window", "width=600", "height=300");
}
