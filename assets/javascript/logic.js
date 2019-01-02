'use strict';

const config = {
  apiKey: "AIzaSyDJYYjJOfgVxjcy3DxPSMsF2QU5lcb3mJg",
  authDomain: "holger-first-firebase-project.firebaseapp.com",
  databaseURL: "https://holger-first-firebase-project.firebaseio.com",
  projectId: "holger-first-firebase-project",
  storageBucket: "holger-first-firebase-project.appspot.com",
  messagingSenderId: "343997001344"
};
firebase.initializeApp(config);

const database = firebase.database();

moment();

$("#addTrainBtn").on("click", function (e) {
  e.preventDefault()
  let trainInput = $("#trainInput").val().trim();
  let destInput = $("#destInput").val().trim();
  let timeInput = moment($("#timeInput").val().trim(), "HH:mm").format();
  let freqInput = $("#freqInput").val().trim();

  database.ref().push({
    name: trainInput,
    destination: destInput,
    time: timeInput,
    frequency: freqInput,
  });

  $("#trainInput").val("");
  $("#destInput").val("");
  $("#timeInput").val("");
  $("#freqInput").val("");
});

let currentTime = moment();

function update() {
  $("#clock1").html(moment().format("MMM DD, YYYY"))
  $("#clock2").html(moment().format("hh:mm:ss A"));
}
setInterval(update, 1000);

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
  let trainName = snapshot.val().name;
  let destName = snapshot.val().destination;
  let timeName = snapshot.val().time;
  let freqName = snapshot.val().frequency;

  let freqParse = parseInt(freqName);
  let timeMoment = moment(timeName);
  let diffMinute = moment().diff(timeMoment, "minutes");
  let timeRemainder = diffMinute % freqParse;
  let minutesLeft = freqParse - timeRemainder;

  let nextTrain = moment().add(minutesLeft, "minutes");

  $("#trainTable > tbody").append("<tr id='row'><td>" + trainName + "</td><td>" + destName + "</td><td>" + freqParse +
    " " + "mins" + "</td><td>" + moment(nextTrain).format("hh:mm A") + "</td><td>" + minutesLeft + " m" +
    "</td><td><input type='button' id='update' class='update'  value='Update' data-toggle='modal' data-target='#exampleModalCenter'></td><td><input type='button' id='rmv' class='rmv' value='Remove'></td></tr>")

  $('#rmv').on("click", function (e) {
    $(this).closest('tr').remove();
  });
});


