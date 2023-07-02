function remove(id){
    document.getElementById(id).remove()
}

// function like(id){
//     var like = parseInt(document.getElementById(id).innerText);
//     like++
//     document.getElementById(id).innerText=like;
// }
function like(e){
    e.innerText++

}
function clicked(e){
    e.innerText="Logout";
}
