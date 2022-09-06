function getAllUsers() {

    fetch('https://reqres.in/api/users?page=2')
    .then((res) =>res.json() )
    .then(res =>{
        console.log(res.data)
        listTables(res.data)
    } )

}
   
function listTables(data){
    let bodyTable =  document.getElementById("body")
    let alert = document.getElementById('alert')

    alert.className = 'alert alert-success alert-dismissible fade show'

    for (let index = 0; index < data.length; index++) {
        let tr  = document.createElement('tr')
        let td1 = document.createElement('td') 
            td1.innerHTML=data[index].first_name

        let td2 = document.createElement('td') 
            td2.innerHTML=data[index].last_name
            
        let td3 = document.createElement('td') 
            td3.innerHTML=data[index].email

        let td4 = document.createElement('td') 
        
        let img = document.createElement('img')
            img.src=data[index].avatar
            td4.appendChild(img)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        bodyTable.appendChild(tr)
        
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

