function getAllUsers() {

    fetch('https://reqres.in/api/users?page=2')
    .then((res) =>res.json() )
    .then(res =>{
        console.log(res.data)
        listTables(res.data)
    } )

}
   
function listTables(data){
    let divPrincipal =  document.getElementById("div-principal")
    let alert = document.getElementById('alert')

    alert.className = 'alert alert-success alert-dismissible fade show'

    for (let index = 0; index < data.length; index++) {
       
        let div  = document.createElement('div')
        div.className = "card col-4 col-md-6 col-lg-6 mb-3 "
        div.style="width: 20rem;"

        let img = document.createElement('img')
        img.className = "card-img-top"
        img.src=data[index].avatar

        let divBody = document.createElement('div')
        divBody.className =  "card-body"

        let h5 = document.createElement('h5')
        h5.className = "card-title"
            h5.innerHTML =  data[index].first_name + " " + data[index].last_name

        let p  = document.createElement('p')
            p.className="card-text"
            p.innerHTML="Correo electrónico : "  +  data[index].email

            div.appendChild(img)
            divBody.appendChild(h5)
            divBody.appendChild(p)
            div.appendChild(divBody)
        
        divPrincipal.appendChild(div)
        
    }
   
}

function register () {

    let obj = {
        name: document.getElementById("name").value,
        job: document.getElementById("job").value
    }
    
    fetch('https://reqres.in/api/users',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(obj)
    })
    .then((res) =>res.json())
    .then(res =>{
        let alert = document.getElementById('alert')
        alert.innerText = "Exito en en el registro " + JSON.stringify(res)
    })

    
}

