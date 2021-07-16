

function enviar(){
    

    let email= document.getElementById('email').value;

    if (typeof(Storage) !== "undefined"){
        localStorage.setItem('lead', email);
    }

    if (!alert(`Obrigado por se cadastrar! Logo receberá nossas ofertas.`))
    {window.location.reload();}

    
}