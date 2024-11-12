
for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"] = i + 100
}

function f1() {
    let str = ""
    let newname = document.querySelector("#n1").value
    const arr1 = catalog.filter(item => item.title.includes(newname))
    document.getElementById("n").innerHTML=" "
    arr1.forEach(item => {
        MyTable(item)
    });
    
}
const countries = catalog.map(item => item.country)
const arr2countries = countries.filter((item, index) => !countries.includes(item, index + 1)).sort()
for (const item of arr2countries) {
    document.getElementById("countries").innerHTML += "<option>" + item + "</option>"
}
function f2()
{
    let newname = event.target.value
    const arr1 = catalog.filter(item => item.country===newname)
    document.getElementById("n").innerHTML=" "
    arr1.forEach(item => {
        MyTable(item)
    });
    
}

function f3()
{
    let first=document.getElementById("in1").value
    let long=document.getElementById("in2").value
    const disk=catalog.find(item=>item.year>first&&item.year<long)
    document.getElementById("n").innerHTML=" "
    MyTable(disk)
}
function MyTable(d)
{
    document.getElementById("n").innerHTML +="<tr>"+"<td>"+d.title+"</td>"+
                                                             "<td>"+d.artist+"</td>"+
                                                             "<td>"+d.company+"</td>"+
                                                             "<td>"+d.country+"</td>"+
                                                             "<td>"+d.price+"</td>"+
                                                             "<td>"+d.year+"</td>"+
                                                             "<td>"+d.id+"</td>"+"</tr>"

}
function add()
{
    let disk={
        title:document.getElementById("title").value,
        artist:document.getElementById("artist").value,
        company:document.getElementById("company").value,
        country:document.getElementById("country").value,
        price:document.getElementById("price").value,
        id:document.getElementById("id").value,
        year:document.getElementById("yaer").value
    }
    catalog.push(disk)
    alert("THE DISK ADDED")
}

function REMOVE()
{
    let x=document.getElementById("remove").value
    catalog.splice(catalog.findIndex(item=>item.id==x),1)
    alert("THE DISK REMOVED")
}
