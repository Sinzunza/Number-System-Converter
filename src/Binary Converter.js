function doStuff(){
	var aNumber = Number(document.getElementById("thisStuff").value);
	if (aNumber < 0  || aNumber > 255) {
	  alert("Integer must be between 0 and 255.");
	}
	else {
	  if (aNumber >= 0 && aNumber <= 1) {
		document.getElementById("binary").innerHTML = "0000 000" + aNumber.toString(2);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		if (aNumber === 0) {
		document.getElementById("two's").innerHTML = document.getElementById("binary").innerHTML;
		}
		else {
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
		}
		else if (aNumber >= 2  && aNumber <= 3) {
		document.getElementById("binary").innerHTML = "0000 00" + aNumber.toString(2);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
		else if (aNumber >= 4  && aNumber <= 7) {
		document.getElementById("binary").innerHTML = "0000 0" + aNumber.toString(2);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
		else if (aNumber >= 8  && aNumber <= 15) {
		document.getElementById("binary").innerHTML = "0000 " + aNumber.toString(2);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
		else if (aNumber >= 16  && aNumber <= 31) {
		document.getElementById("binary").innerHTML = "000" + aNumber.toString(2).substring(0,1) + " " + aNumber.toString(2).substring(1,5);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
		else if (aNumber >= 32  && aNumber <= 63) {
		document.getElementById("binary").innerHTML = "00" + aNumber.toString(2).substring(0,2) + " " + aNumber.toString(2).substring(2,6);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
		else if (aNumber >= 64  && aNumber <= 127) {
		document.getElementById("binary").innerHTML = "0" + aNumber.toString(2).substring(0,3) + " " + aNumber.toString(2).substring(3,7);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
		else if (aNumber >= 128  && aNumber <= 255) {
		document.getElementById("binary").innerHTML = aNumber.toString(2).substring(0,4) + " " + aNumber.toString(2).substring(4,8);
		document.getElementById("one's").innerHTML = (~aNumber >>> 0).toString(2).substring(24,28) + " " + (~aNumber >>> 0).toString(2).substring(28,32);
		document.getElementById("two's").innerHTML = (~aNumber + 1 >>> 0).toString(2).substring(24,28) + " " + (~aNumber + 1 >>> 0).toString(2).substring(28,32);
		}
	 }
}
