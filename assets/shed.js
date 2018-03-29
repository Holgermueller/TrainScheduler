'use strict';

//initialize Firebase (those 6/7 lines of code)


  // Initialize Firebase
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
//console.log(moment);

//declare variables

$("#addTrainBtn").on("click", function(e) {
    e.preventDefault()
    //figure out where to put thse!!
    $("#trainInput").empty();
    $("#destInput").empty();
    $("#timeInput").empty();
    $("#freqInput").empty();
    let trainInput = $("#trainInput").val().trim();
        //console.log(trainInput);
    let destInput = $("#destInput").val().trim();
        //console.log(destInput);
    let timeInput = moment($("#timeInput").val().trim(), "HH:mm").format("x");
        //console.log(timeInput);
    let freqInput = moment($("#freqInput").val().trim(), "mm").format("x");
        //console.log(freqInput);

    //push info to firebase
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

//create clock and append

let currentTime = new Date();
    console.log(currentTime);
    $("#clock").append(currentTime);

//Firebase watcher + initial loader + order/limit Hint
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
    //store snapshot value
    let sv = snapshot.val();
        console.log(sv);

    let trainName = snapshot.val().name;
    let destName = snapshot.val().destination;
    let timeName = snapshot.val().time;

//prettify frequency
    let freqName = snapshot.val().frequency;
    let freqPretty = moment.unix(freqName).format("mm");

    console.log(trainName);
    console.log(destName);
    console.log(timeName);
    console.log(freqName);

//calculate next arrival from military time


//calculate minutes away

//append everything to schedule

$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destName + "</td><td>" + freqPretty + 
" " + "mins" + "</td><td>" + "</td></tr>")

});