var tz1 = 0; 
var tz2 = 0;

function convertTimeZone2to1(valueTimeZone1, valueTimeZone2, name1, name2) {
	// if timezone1 is -4 and timezone2 is -11
// if (valueTimeZone1 === undefined || valueTimeZone2 === undefined){
// 	return 0;
// }
	valueTimeZone1 = valueTimeZone1/10;
	if (valueTimeZone1 >= 0){
		valueTimeZone1 = Math.floor(valueTimeZone1);
	}
	else{
		valueTimeZone1 = Math.ceil(valueTimeZone1);	
	}
	valueTimeZone2 = valueTimeZone2/10;
	if (valueTimeZone2 >= 0){
		valueTimeZone2 = Math.floor(valueTimeZone2);
	}
	else{
		valueTimeZone2 = Math.ceil(valueTimeZone2);	
	}
	var diff = valueTimeZone1 - valueTimeZone2;
	//window.alert(getTimeuserDef(valueTimeZone1 , diff));
	// window.alert(valueTimeZone1);
	// window.alert(valueTimeZone2);
	// window.alert(diff);
	
	var text = " ";
	var i;
	for (i = 0 ; i < 24 ; i++){
		var hold = getTimeuserDef(i , diff);
		var yt = new Date();
		//window.alert(yt);
		hold = hold - yt+1000;
		var q = new Date();
		q.setTime(hold);
		var final = q.getHours();
		if (final >= 24){
			final=0;
		}

		if (i > 8 && i < 18 && final > 8 && final < 18){
			console.log(i +" <---MATCH----> "+ final);			
		}
		else{
		console.log(i +" <------------> "+ final);
	}
	}
	return 0;
}


function myFunction(value, useDaylightTime) {
	var y = new Date();
	var n = y.getTimezoneOffset();
	n=n/60;
	var v = value;
	var u = useDaylightTime;
	var d = Date.parse(y);
	d=d+(v*60*60*1000)+(n*60*60*1000)+(u*60*60*1000);
	var q = new Date();
	tz1 = value +useDaylightTime;
	q.setTime(d);

	document.getElementById("demo").style.visibility = "visible";
	document.getElementById("demo").innerHTML = q;
	//document.getElementById("demo1").innerHTML = q;
	convertTimeZone2to1(tz1, tz2);
	return 0;
}

Date.prototype.isValid = function () {
	return this.getTime() === this.getTime();
}

function updateTime(){
	var currentDate = new Date (document.getElementById("demo").innerHTML);

	if (!currentDate.isValid()){
		document.getElementById("demo").style.visibility = "hidden";
	}
	else{
		document.getElementById("demo").style.visibility = "visible";
	}
	//increment the time by one second
	var updatedDate = new Date();
	updatedDate.setTime(currentDate.getTime() + 1000);

	document.getElementById("demo").innerHTML = updatedDate;
	//call back in 1000ms so updates the time every secong
	setTimeout(updateTime, 1000);

	return 0;
}

function getUTCtime(value) {
	var y = new Date();
	var n = y.getTimezoneOffset();
	n=n/60;
	var v = value;
	var u = useDaylightTime;
	var d = Date.parse(y);
	d=d+(v*60*60*1000)+(n*60*60*1000)
	var q = new Date();
	q.setTime(d);
	document.getElementById("demo2").innerHTML = q;
	//document.getElementById("demo1").innerHTML = q;
	return q;
}

function getTimeuserDef(val, diff){
	var y = new Date();
	var n = y.getTimezoneOffset();
	n=n/60;
	var v = val;
	var u = diff;
	var d = Date.parse(y);
	d=d+(val*60*60*1000)+(n*60*60*1000)-(diff*3600*1000);
	var q = new Date();
	q.setTime(d);
	return q;
}

function myFunction1(value, useDaylightTime) {
	var y = new Date();
	var n = y.getTimezoneOffset();
	n=n/60;
	var v = value;
	var u = useDaylightTime;
	var d = Date.parse(y);
	d=d+(v*60*60*1000)+(n*60*60*1000)+(u*60*60*1000);
	var q = new Date();
	tz2 = value + useDaylightTime;
	q.setTime(d);
	//document.getElementById("demo").innerHTML = q;

	document.getElementById("demo1").innerHTML = q;
	return 0;
}
