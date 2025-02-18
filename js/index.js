fetch("https://api.escuelajs.co/api/v1/products")
.then(res=>res.json())
.then (data=>{
    let tabla="";

    data.forEach(user => {
            tabla+=`
            <tr>
                <td>${user.title}</td>
                <td>${user.price}</td>
                <td>${user.description}</td>
                <td>${user.category.name}</td>
            </tr>`
    });
    document.getElementById("tblUsers").innerHTML=tabla
   
})
.catch(error=>console.error('error al tomar los datos: ',error));
