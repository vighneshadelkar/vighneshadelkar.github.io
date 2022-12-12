let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let input = document.getElementById("main-input").value;
    //ul  
    let ul = document.querySelector("ul");

    // div in which li and button is present
    let div = document.createElement("div");
    div.setAttribute("id", "list-div");

    // li elemnt created
    let li = document.createElement("li");
    li.classList.add("list");
    let liinput = document.createTextNode(input);

    // delete button
    let del = document.createElement("button");
    del.classList.add("del-btn");
    let delval=document.createTextNode("DELETE");

    // add child to div
    del.appendChild(delval);
    li.appendChild(liinput);
    div.appendChild(li);
    div.appendChild(del);

    localStorage.setItem("data", JSON.stringify(input));
    JSON.parse(localStorage.getItem("data"));
    if (input == "") {
        alert("PLEASE ENTER A TASK");
    }
    else {
        document.getElementsByTagName("ul")[0].appendChild(div);
        let input = document.getElementById("main-input").value;
        document.getElementById("main-input").value = "";
    }
    del.addEventListener('click',()=>{
        div.removeChild(li);
        div.removeChild(del);
    });
});