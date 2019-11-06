var firebaseConfig = {
    apiKey: "AIzaSyD8oC9MzC6ZNob-D1C38wHwJJYOjbaQgNo",
    authDomain: "test-app-92dd3.firebaseapp.com",
    databaseURL: "https://test-app-92dd3.firebaseio.com",
    projectId: "test-app-92dd3",
    storageBucket: "test-app-92dd3.appspot.com",
    messagingSenderId: "1047296425827",
    appId: "1:1047296425827:web:1033d37a7905de48d09d56",
    measurementId: "G-3CZ5J0Z7BB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#add-train-btn").on("click",function(event) {
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainStart = moment($("#firstTrainTime-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#frequency-input").val().trim(); 

    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firstTrain: trainStart,
      frequency: trainFrequency
      
    };

    database.ref().push(newTrain);
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(trainFrequency);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#firstTrainTime-input").val("");
    $("#frequency-input").val("");
  })

  database.ref().on("child-added",function(childSnapshot){
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().firstTrain;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainStart);
    console.log(trainFrequency);

    var trainStartPretty = moment.unix(trainStart).format("HH:mm"),



  })
