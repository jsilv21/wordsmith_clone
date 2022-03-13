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
const getSuggestions = async () => {
    event.preventDefault(); //prevents default button action 
    if(responseField.firstChild){
    responseField.removeChild(responseField.firstChild); //removes the prior result
    }
    const wordQuery = inputField.value;
    const topicQuery = topicField.value;
    const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
    try{
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(`query successful`)
            renderResponse(jsonResponse);
        }
        else {
            throw new Error('fetch request failed');
        }
    }catch(error){
        console.log(error);
    }        
}

// ? codecademys formatting to clear response before next query - prob better?
// const displaySuggestions = (event) => {
//     event.preventDefault();
//     while(responseField.firstChild){
//       responseField.removeChild(responseField.firstChild);
//     }
//     getSuggestions();
// }

//event listener
submit.addEventListener('click', getSuggestions);
