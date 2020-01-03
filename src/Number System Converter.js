var theNumber;

function decimalConverter() {

	document.getElementById("binaryInserted").value = " ";
	document.getElementById("hexadecimalInserted").value = " ";
	theNumber = Number(document.getElementById("decimalInserted").value);
	if (theNumber < 0  || theNumber > 4294967295) {
		alert("Number must be between 0 and 4,294,967,295!");
	}
	else {
		numberConverter();
	}

}

function binaryConverter() {

	document.getElementById("decimalInserted").value = " ";
	document.getElementById("hexadecimalInserted").value = " ";
	var theBinary = (document.getElementById("binaryInserted").value);
	theNumber = parseInt(theBinary, 2);
	if (theNumber < 0  || theNumber > 4294967295) {
		alert("Number must be between 0 and 4,294,967,295!");
	}
	else {
		numberConverter();
	}

}

function hexadecimalConverter() {

	document.getElementById("decimalInserted").value = " ";
	document.getElementById("binaryInserted").value = " ";
	var theHexadecimal = (document.getElementById("hexadecimalInserted").value);
	theNumber = parseInt(theHexadecimal, 16);
	if (theNumber < 0  || theNumber > 4294967295) {
		alert("Number must be between 0 and 4,294,967,295!");
	}
	else {
		numberConverter();
	}

}


function numberConverter(){

	//decimal
        document.getElementById("decimalOutput").innerHTML = theNumber;
	//binary
	var binaryString = theNumber.toString(2); //fill the beginning with zero's
	while(binaryString.length < 32) {
		binaryString =  "0" + binaryString;
	}
	var onesString = (~theNumber >>> 0).toString(2);
	while(onesString.length < 32) {
		onesString =  "0" + onesString;
	}
	var twosString = (~theNumber + 1 >>> 0).toString(2);
	while(twosString.length < 32) {
		twosString =  "0" + twosString;
	}

	document.getElementById("binaryOutput").innerHTML = binaryString.substring(0,4) + " " + binaryString.substring(4, 8) + " " + binaryString.substring(8, 12) + " " + binaryString.substring(12, 16) + " " +
							    binaryString.substring(16,20) + " " + binaryString.substring(20, 24) + " " + binaryString.substring(24, 28) + " " + binaryString.substring(28, 32);

	document.getElementById("one'sOutput").innerHTML = onesString.substring(0,4) + " " + onesString.substring(4,8) + " " + onesString.substring(8,12) + " " + onesString.substring(12,16) + " " +
						           onesString.substring(16,20) + " " + onesString.substring(20,24) + " " + onesString.substring(24,28) + " " + onesString.substring(28,32);

        document.getElementById("two'sOutput").innerHTML = twosString.substring(0,4) + " " + twosString.substring(4,8) + " " + twosString.substring(8,12) + " " + twosString.substring(12,16) + " " +
							   twosString.substring(16,20) + " " + twosString.substring(20,24) + " " + twosString.substring(24,28) + " " + twosString.substring(28,32);

	//hexadecimal
	document.getElementById("hexadecimalOutput").innerHTML = theNumber.toString(16).substring(0,8);

}
