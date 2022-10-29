function func() {
    var text = document.getElementById("demo");
    if (text.innerHTML == "foo"){
        text.innerHTML = "bar";
    }
    else {
	text.innerHTML = "foo";
     }
