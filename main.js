// will setup requests, etc. here
// redirect to helper file for response functions

//Building API params
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

//Page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

//combining query values into API endpoint string
const getSuggestions =()=>{
    event.preventDefault();
    responseField.removeChild(responseField.firstChild);


    const wordQuery = inputField.value;
    const topicQuery = topicField.value;
    const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

//open request
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';


//listen for success
xhr.onreadystatechange = () =>{
    if (xhr.readyState === XMLHttpRequest.DONE){
    renderRawResponse(xhr.response);
    }
}

//get request
xhr.open('GET',endpoint);
xhr.send();
console.log(`${endpoint}`)
console.log('request sent')
}

// //update the response form
// const displaySuggestions = (event) => {
//     event.preventDefault();
//     while(responseField.firstChild){
//       responseField.removeChild(responseField.firstChild);
//     }
//     getSuggestions();
// }

//event listener
submit.addEventListener('click', getSuggestions);
