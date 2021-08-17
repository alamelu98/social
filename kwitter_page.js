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
    var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
function send()
{
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  likes:0
            }
      )
      document.getElementById("msg").value="";
}
