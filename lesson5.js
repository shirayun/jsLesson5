
for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"] = i + 100
}

function f1() {
    let str = ""
    let newname = document.querySelector("#n1").value
    const arr1 = catalog.filter(item => item.title.includes(newname))
    arr1.forEach(item => {
        str += item.company + " " + item.artist + " " + item.country + " " + item.id + " " + item.price + " " + item.title + " " + item.year + "</br>"

    });
    document.getElementById("n2").innerHTML = str
}
const countries = catalog.map(item => item.country)
const arr2countries = countries.filter((item, index) => !countries.includes(item, index + 1)).sort()
for (const item of arr2countries) {
    document.getElementById("countries").innerHTML += "<option>" + item + "</option>"
}
function f2()
{
    let str = ""
    let newname = event.target.value
    const arr1 = catalog.filter(item => item.country===newname)
    arr1.forEach(item => {
        str += item.company + " " + item.artist + " " + item.country + " " + item.id + " " + item.price + " " + item.title + " " + item.year + "</br>"

    });
    document.getElementById("n3").innerHTML = str
}

function f3()
{
    let first=document.getElementById("in1").value
    let long=document.getElementById("in2").value
    const disk=catalog.find(item=>item.year>first&&item.year<long)
    let str=disk.artist+" "+disk.company+" "+disk.country+" "+disk.price+" "+disk.title+" "+disk.year+" "+disk.id
    document.getElementById("n4").innerHTML = str
}
