
for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"] = i + 100
}

function f1() {
    let str = ""
    let newname = document.querySelector("#n1").value
    const arr1 = catalog.filter(item => item.title.includes(newname))
    arr1.forEach(item => {
        str += item.company + " " + item.artist + " " + item.country + " " + item.id + " " + item.price + " " + item.title + " " + item.year+"</br>"
        
    });
    document.getElementById("n2").innerHTML=str
}