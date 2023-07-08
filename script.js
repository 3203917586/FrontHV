console.log("Loading Javascript.......")


function saveCont() {
    let nameCont = document.getElementById("name").value;
    let MailCont = document.getElementById("Mail").value;
    let telCont = document.getElementById("Tel").value;
    let editionCont = document.getElementById("edition").value;
    
    let cont = {
        name: nameCont,
        Mail: MailCont,
        tel: telCont,
        edition: editionCont
    }

    console.log(cont);

    let url = "http://localhost:8000/api/creacion";
    let params = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cont),
    }

    fetch(url, params)
        .then(response => {
            console.log(response);
            console.log(response.json());

            if(response.status == 201) {
                alert("Creación Mensaje");
            } else {
                alert("Error en la creación del mensaje");
            }
        });

    return true;
}


function getCont(){


    let url = "http://localhost:8000/api/peticion";
    let params = {
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());
    });



    
    url = "https://api.agify.io/?name=meelad";
    params = {      
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());
    });


    return true;
}