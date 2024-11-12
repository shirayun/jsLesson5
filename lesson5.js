
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
    let str = ""
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
