let brands= ["tesla","bmw", "mercedes"];
function search () {
  let text  = <HTMLInputElement>document.getElementById('brand-input');

  for(let i =0; i <brands.length; i ++) {
    if(brands[i] === text.value) {
    alert("In Stock")
  }  else {
    alert ("no match");
  }
}
}
