const renderRawResponse = (res) => {
    let trimmedResponse = res.slice(0, 10)
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}<text>`;
}

const renderResponse =(res)=>{
    console.log(res.length)
    if(!res){
        console.log(res.status)
    }
    //handle for blanks
    if(res.length===0){
        responseField.innerHTML =`<p>No suggestions found. Try another.</p>`;
        return
    }
    let wordList =[];
    let wordCount = 0;
    for (let i = 0; i < Math.min(res.length, 10); i++){ // loop, but take either minimum length or 10 max;
        wordList.push(`<li>${res[i].word} - score of ${res[i].score}</li>`)
        wordCount++;
    }
    wordList = wordList.join("");
    responseField.innerHTML = `<p>Your results are: </p><ol>${wordList}</ol><br><p>Showed ${wordCount} out of ${res.length} total results.</p>`;
    return
}