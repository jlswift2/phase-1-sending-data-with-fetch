function submitData(name, email){
    const formFormat = {
        "name": name,
        "email": email,
    };
    
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formFormat),
        }
    
    return fetch("http://localhost:3000/users", configurationObject)
    .then(resp  => resp.json())
    .then(obj => {
        const goodDiv = document.createElement('div')
        goodDiv.textContent = obj.id
        console.log(goodDiv);
        document.body.appendChild(goodDiv)
    })
    .catch(error => {
        const errorDiv = document.createElement('div')
        errorDiv.textContent = error.message
        console.log(errorDiv);
        document.body.appendChild(errorDiv)
    });
}


submitData('justin', 'askdljfalsdk')