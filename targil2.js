function func1(){
    const names=["Alice", "Bob", "Tiff","Bruce","Alice"]
    const res=names.reduce((prev, cur)=>{
        if(prev[cur]==null){
            prev[cur]=0
        }
        prev[cur]++
        return prev
    },{})
    return  res
}

console.log(func1());
function func2(){
    const letters=['a','a','b','a','c','d','b','a','d','c','a','c']
    const res=letters.reduce((prev,cur)=>{
        if(!prev.includes(cur)){
            prev.push(cur)
        }
        return prev
    },[])
    return res
}
console.log(func2());

function func3(){
    const numbers=[-5,25,-19,0,16,0]
    const res=numbers.reduce((prev,cur)=>{
        if(cur>0){
            prev.push(Math.sqrt(cur))
        }
        return prev
    },[])
    return res
}
console.log(func3());
