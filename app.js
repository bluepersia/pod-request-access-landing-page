document.querySelector ('form').addEventListener ('submit', handleSubmit);
const inputWrapper = document.querySelector ('.input-1-wrapper');


function handleSubmit (e)
{
    e.preventDefault ();

    inputWrapper.classList.remove ('invalid');

    if (!isEmail (inputWrapper.querySelector ('.input-1').value))
        inputWrapper.classList.add ('invalid');

        
}



function isEmail (str) 
{
    return str.match (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
}