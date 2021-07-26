//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBcyBAjqTe_UPbF-5U8jVoF5m1_v0Wv4PA",
      authDomain: "lets-chat-34196.firebaseapp.com",
      databaseURL: "https://lets-chat-34196-default-rtdb.firebaseio.com",
      projectId: "lets-chat-34196",
      storageBucket: "lets-chat-34196.appspot.com",
      messagingSenderId: "49499853630",
      appId: "1:49499853630:web:a217622bad78522b18126f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name") 
   room_name = localStorage.getItem("room_name")

   function send(){
         msg = document.getElementById("msg").value
         firebase.database().ref(room_name).push({
               massage:msg,
               likes:0,
               name:user_name
         })
         document.getElementById("msg").value = "";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
