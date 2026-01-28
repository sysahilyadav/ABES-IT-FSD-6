const getData=async()=>{
    const response=await fetch("https://fakestoreapi.com/products");
    const res=await response.json();
    console.log(res);

}
getData();



/*const myPromise=new Promise((resolve,reject)=>{
    let marks=80;
    if (marks>33){
        resolve("pass");
    }
    else{
        reject("fail");

    }

})
myPromise.then((msg)=>console.log(msg))
.catch((error)=>console.log("some error occured"));
console.log(myPromise);
*/
