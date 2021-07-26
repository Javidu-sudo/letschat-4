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
    /// code
    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Wellcome" +user_name+"!"
function add_room(){
      room_name = document.getElementById("name_room").value
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding a row"
      })
      localStorage.setItem("room_name",room_name)
      window.location = "letschat_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row 
      });});}
getData();
function redirectToRoomName(room_name){
window.location = "letschat.html"
}
function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location = "index.html"
}