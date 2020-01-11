var firebase = require('firebase')
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDALsto-0jO3i3sdhRHfpNOcUoFAASldl8",
    authDomain: "blitztech-f41ff.firebaseapp.com",
    databaseURL: "https://blitztech-f41ff.firebaseio.com",
    projectId: "blitztech-f41ff",
    storageBucket: "blitztech-f41ff.appspot.com",
    messagingSenderId: "341387930000",
    appId: "1:341387930000:web:2aac3fb944717910856b15"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});

function pushData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/pushData').push();
  dataRef.set({
    value: data
  });
}

function setData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/setData');
  console.log(data)
  dataRef.set({
    value: data
  });
}

setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
});

pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('value', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);
  });
  console.log(Object.keys(snapshot.val()));
  
})


var preObject = document.getElementById('Pedestrian');
var dbRefObject = firebase.database().ref().child('Pedestrian')
// console.log("hi"+preObject)
// console.log("bye"+dbRefObject)

   dbRefObject.on('value', function(snap) {
     preObject.innerText = JSON.stringify(snap.val(), null, 3)
     preObject.innerText.forEach
   })

  //  var preObject1 = document.getElementById('setData');
  //  var dbRefObject1 = firebase.database().ref().child('setData')
  //  dbRefObject1.on('value', function(snap) {
  //   preObject1.innerText = JSON.stringify(snap.val(), null, 3)
  // })

  function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

firebase.database().ref('/setData/value').on('value', function(snapshot) {
  var children = snapshotToArray(snapshot);
  var i,j

  console.log("Lat: "+children[0])
  console.log("Long: "+children[1])
});