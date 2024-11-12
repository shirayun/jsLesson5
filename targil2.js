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
