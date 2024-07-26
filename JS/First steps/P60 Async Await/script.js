async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();

        if (response.ok) {
            console.log(data);
            if(!(response.status == 100)){
                throw new Error('Ошибка HTTP:' + response.status);
            }
        }
    } catch(error){
        errorMessage(error)
    }
}
function errorMessage(error){
    const message = error.message
    console.error(message)
}
fetchData()