function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(0);
	var watchPosition = navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

function goToDeviceInfo(){
  window.location.href = "deviceInfo.html";
} 

function goToMovementInfo(){
  window.location.href = "movementInfo.html";
} 

function goToMainPage(){
  window.location.href = "index.html";
} 

function internetInfo() {
	
	var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

	var result = states[networkState];
	document.getElementById("inter").innerHTML = result;
}

function onSuccess(acceleration) {
	var array = [];
	array[0] = acceleration.x;
	array[1] = acceleration.y;
	array[2] = acceleration.z;
    /*alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');*/
	return array;
}

function onError() {
    alert('onError!');
}

function getMovementInfo() {
	var watchPos =navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
	var result = "tablica watchPos: "+watchPos.length+"tablica watchPosition: "+ watchPosition.length;
	document.getElementById("mov").innerHTML = result;
}
