
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD5Hlq6YUufjAe1Y_F7wv-qbWRC8r-xuPs",
      authDomain: "mycitybot-xgwu.firebaseapp.com",
      databaseURL: "https://mycitybot-xgwu-default-rtdb.firebaseio.com",
      projectId: "mycitybot-xgwu",
      storageBucket: "mycitybot-xgwu.appspot.com",
      messagingSenderId: "421804753404",
      appId: "1:421804753404:web:9a6bbcff529cd7825a3279",
      measurementId: "G-H45B9CXJVQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
