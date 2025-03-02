let fetchData=async()=>{
    let url="http://localhost:3000/hotel"
    let res=await fetch(url)
    let data=await res.json()
    console.log(data)
    let display=document.querySelector("#display")
    data.map((e)=>{
    display.innerHTML+=`<tbody>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.city}</td>
    <td>${e.aadhar}</td>
    <td>${e.number}</td>
    <td>${e.fees}</td>
    <td>${e.person}</td>
    <td>${e.fees*e.person}</td>
    <td onclick="deletee('${e.id}')">cancel</td>
    <td onclick="formfill('${e.id}')">update</td>
    </tbody>`
    })
    }
    // fetchData()

    let deletee = (id)=>{

        let url = `http://localhost:3000/hotel/${id}`;

        fetch(url,{method:"DELETE"})
    }

    let userinput=()=>{
        let inpname = document.querySelector("#name").value;
        let inpage = document.querySelector("#age").value;
        let inpcity = document.querySelector("#city").value;
        let inpaadhar = document.querySelector("#aadhar").value;
        let inpnum = document.querySelector("#number").value;
        let inpperson = document.querySelector("#Person").value;
        let inpdate = document.querySelector("#opponitment").value;

        let url ='http://localhost:3000/hotel'
        fetch(url, { 
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: inpname,
                age: inpage,
                city: inpcity,
                aadhar: inpaadhar,
                number: inpnum,
                person: inpperson,
                appointment: inpdate,
                fees: 2000,


            })
        })

        location.href = "crud.html" 
        return false

    }

    let formfill =async(id)=>{

        let url = `http://localhost:3000/hotel/${id}`

        let res = await fetch(url,{method:"GET"}) 

        let data = await res.json()

        console.log(data);


        let formdata = `

        enter name : <input type="text" id="upname" value="${data.name}"><br><br>

          enter name : <input type="text" id="upage" value="${data.age}"><br><br>


        `
        document.querySelector("#show").innerHTML=formdata

    }