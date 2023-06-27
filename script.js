//your JS code here. If required.
function CreatPromise(){
	return new Promise((resolve, reject)=>{
		setTimeOut({
			resolve("Hello, world!")
		},1000)
	})
}
CreatPromise().then((data) =>{
	const element= document.getElementById("output");
	element.innerText= data;
})