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

//declare variables

$("#addTrainBtn").on("click", function(e) {
    e.preventDefault()
    let trainInput = $("#trainInput").val().trim();
        //console.log(trainInput);
    let destInput = $("#destInput").val().trim();
        //console.log(destInput);
    let timeInput = $("#timeInput").val().trim();
        //console.log(timeInput);
    let freqInput = $("#freqInput").val().trim();
        //console.log(freqInput);

    //push info to firebase
    database.ref().push({
        name: trainInput,
        destination: destInput,
        time: timeInput,
        frequencty: freqInput,
    });
});

//Firebase watcher + initial loader + order/limit Hint
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
    //store snapshot value
    let sv = snapshot.val();
        console.log(sv);
})

//calculate next arrival

//calculate minutes away

//append everything to schedule
