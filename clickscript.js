<script>
  int clicks_num = 0;
	function func() {
    	var text = document.getElementById("demo");
    	if (text.innerHTML == "foo"){
        	text.innerHTML = "bar";
        }
        else {
        	text.innerHTML = "foo";
        }
    clicks_num += 1
    document.getElementById("clicks").innerHTML = "clicks: "+clicks_num
    }
</script>
