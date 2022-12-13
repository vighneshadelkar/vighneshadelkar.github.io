let sub = document.getElementById("sub");

sub.addEventListener('click', (e) => {
    e.preventDefault();
});
let btn = document.getElementsByClassName("btn-primary");
for (let i = 0; i < btn.length; i++) {
    // console.log(btn.length);
    btn[i].addEventListener = ('click', (e)=>{
        let button=e.target;
        let card_body=button.parentElement.parentElement;
        let card_title=card_body.getElementsByClassName("card-title")[0].innerText;
        let card_text=card_body.getElementById("item-value")[0].innerText;
        console.log(card_text);
        console.log(card_title);
        insertList(card_text,card_title)
    });
}
function insertList(card_text,card_title) {
    // console.log(btn.length);
    document.getElementsByClassName("card-title").innerHTML = card_title;
    document.getElementsByClassName("card-text").innerHTML = card_text;
    let li = document.createElement("li");
    li.classList.add("lists")
    li.innerHTML = `<div class="card m-10">
        <div class="card-body">
            <h5 class="card-title text-dark">${card_title}</h5>
            <p class="card-text text-dark">${card_text}</p>
            <button type="button" class="btn btn-danger" onclick="deletelist()">Remove</button>
        </div>
    </div>`
    let row = document.createElement("div");
    row.classList.add("row")
    row.append(li);
    document.getElementById("item-list").append(row);
    function total(card_text) {
        let del = document.getElementsByClassName("btn-danger");
        let total = 0;
        for (let i = 0; i < del.length; i++) {
            console.log(del.length);
            total = (total + parseFloat(card_text));
        }
        document.getElementById("total").innerHTML = total;
    }
    total(card_text);
}
// );
// }
function deletelist() {
    let del = document.getElementsByClassName("btn-danger");
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', (e) => {
            console.log(del.length)
            let remove = e.target.parentElement.parentElement.remove();
        })
    }
}
   // let card_title = document.getElementsByClassName("card-title").innerHTML;
    //     let card_text = document.getElementById("item-value").innerHTML;
    //     document.getElementsByClassName("cardtitle").innerHTML = card_title;
    //     document.getElementsByClassName("cardtext").innerHTML = card_text;
    //     let li = document.createElement("li");
    //     li.classList.add("lists")
    //     li.innerHTML = `<div class="card m-10">
    //     <div class="card-body">
    //         <h5 class="cardtitle text-dark"></h5>
    //         <p class="cardtext text-dark"></p>
    //         <button type="button" class="btn btn-danger" onclick="deletelist()">Remove</button>
    //     </div>
    // </div>`
    //     let row = document.createElement("div");
    //     row.classList.add("row")
    //     row.appendChild(li);
    //     document.getElementById("item-list").appendChild(row);
    //     function total(cardtext) {
    //         let del = document.getElementsByClassName("btn-danger");
    //         let total = 0;
    //         for (let i = 0; i < del.length; i++) {
    //             console.log(del.length);
    //             total = (total + parseFloat(cardtext));
    //         }
    //         document.getElementById("total").innerHTML = total;
    //     }
    //     total();



