let msg= document.getElementById("errorORsuccess");
let addbtn = document.getElementById("addbtn");
let noOfEmp = document.getElementById("no.ofEmp");

let flag = false;

addbtn.addEventListener("click", function(event) {
    event.preventDefault();
})

let users = [];
let i = 0;

function addUser() {
    let userName = document.getElementById("userName").value;
    let userProfession = document.getElementById("userProfession").value;
    let userAge = document.getElementById("userAge").value;

    if (userName=="" || userProfession=="" || userAge=="") {
        flag = true;
        msg.innerHTML = "Error: Please make sure All the fields are filled before adding in an employee";
        msg.style.color = "red";
    }
    
    if(flag != true) {
        let combineDiv = document.getElementById("combine-div");
        msg.innerHTML = "Success: Employee Added!";
        msg.style.color = "green";
        noOfEmp.innerHTML = "";
        i++;
        let obj = {
            id: i,
            name: userName,
            profession: userProfession,
            age: userAge,
        }
        users.push(obj);

        let div = document.createElement("div");
        p1 = document.createElement("p");
        p1.innerHTML = obj.id + ".";
        div.appendChild(p1);
        p2 = document.createElement("p");
        p2.innerHTML = "Name: " + obj.name;
        div.appendChild(p2);
        p3 = document.createElement("p");
        p3.innerHTML = "Profession: " +  obj.profession;
        div.appendChild(p3);
        p4 = document.createElement("p");
        p4.innerHTML = "Age: " +  obj.age;
        div.appendChild(p4); 
        
        combineDiv.appendChild(div);
        
        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = "Delete User";
        combineDiv.appendChild(deletebtn);
        deletebtn.onclick = function() {
            div.outerHTML = "";
            deletebtn.outerHTML = "";
        }
        // console.log(bottomUI);
    }
}

