// document.addEventListener("DOMContentLoaded", (event) => {
//     const request = new XMLHttpRequest();
//     request.open("GET","https://stoic-quotes.com/api/quote")
//     request.send();
//     request.onload = ()=>{
//         if (request.status === 200){
//             text = (JSON.parse(request.response)).text;
//             author = (JSON.parse(request.response)).author;
//             console.log(text);
//             console.log(author);
//             var TextElement =(document.getElementById("QuoteText"));
//             var AuthorElement  = document.getElementById("QuoteAuthor");
//             console.log("DOM fully loaded and parsed");
//             TextElement.innerHTML = `"${text}"`;
//             AuthorElement.innerHTML = `-${author}`
//             console.log(text.length);
//             const textLength = text.length;
//             if (textLength > 60){
//                 TextElement.style.top = 20+"%";
//                 AuthorElement.style.top = 55+"%";
//             }
//             if(textLength>100){
//                 TextElement.style.top=15+"%";
//                 AuthorElement.style.top = 60+"%";
//             }
//         }
//     }
// });

