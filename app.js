var brands = ["tesla", "bmw", "mercedes"];
function search() {
    var text = document.getElementById('brand-input');
    for (var i = 0; i < brands.length; i++) {
        if (brands[i] === text.value) {
            alert("In Stock");
        }
        else {
            alert("no match");
        }
    }
}
