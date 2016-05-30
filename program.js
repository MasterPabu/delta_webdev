var eventDate = new Date("Jan 1 2017 00:00:00");
var v = countDownTimer();
			function setEventTitle () {
				document.getElementById("eventName").innerHTML=document.getElementById("event_name").value;
			}
			function doReset () {
				eventDate = Date.parse("Jan 1 2017 00:00:00");
				document.getElementById("eventName").innerHTML=" COUNTDOWN TO 2017! ";
			}
			function setEventTime () {
				eventDate=Date.parse(document.getElementById("event_time").value);
			}
			function countDownTimer () {
				var currDate = new Date();
				if (eventDate > currDate){
					var timeDiff = eventDate - currDate;
					var seconds = Math.floor((timeDiff / 1000) % 60);
					var mins = Math.floor((timeDiff / (1000 * 60)) % 60);
					var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
					var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
					document.getElementById("days_number").innerHTML= days;
					document.getElementById("hours_number").innerHTML= hours;
					document.getElementById("minutes_number").innerHTML= mins;
					document.getElementById("seconds_number").innerHTML= seconds;
				}
				else{
					alert("The countdown has ended!");
				}
			}
var interval = setInterval(countDownTimer,1000);
