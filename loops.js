
         
function forLoop(arr) {
  for(let i = 0; i < 25; i++){
    if (i===1) {
      arr.push(`I am 1 strange loop.`)
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
return arr

}

function whileLoop(n=20){
	while (n>0){
      	console.log(--n) 
     }
	n = 0;
    return'done'
}