const renderRawResponse =(res) => {
    let trimmedResponse = res.slice(0, 10)
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}<text>`;
}

const renderResponse =(res)=>{
    //get results
    //will be JSON notation
    //also need to format
}