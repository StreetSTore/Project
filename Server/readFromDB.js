var admin = require("firebase-admin");
var serviceAccount = require("./testing-c1351-firebase-adminsdk-4tzzm-6c26799bd3.json");
var http = require('http');
var url = require('url');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://testing-c1351.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("users/alanisawesome");
var ref = db.ref("users/alanisawesome");

// ref.on("value", function(snapshot) {
  // console.log(snapshot.val());
// }, function (errorObject) {
  // console.log("The read failed: " + errorObject.code);
// });

ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log(newPost);
  // console.log("Author: " + newPost.author);
  // console.log("Title: " + newPost.title);
  // console.log("Previous Post ID: " + prevChildKey);
  console.log();
});
