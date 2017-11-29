var admin = require("firebase-admin");
var serviceAccount = require("./testing-c1351-firebase-adminsdk-4tzzm-6c26799bd3.json");
var http = require('http');
var url = require('url');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://testing-c1351.firebaseio.com"
});

var db = admin.database();
var ref = db.ref();

var usersRef = ref.child("users");
usersRef.update({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing",
	cars: {
		1: "audi",
		2: "jaguar"
   }
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  },
  billgates: {
    date_of_birth: "some x, 1965",
    full_name: "Bill Gates"
  },
   boomboom: {
    date_of_birth: "some 22, 9999",
    full_name: "CAVOOM Boom",
	cars: {
		1: "volvo",
		2: "bmw"
   }
  }
});

// var postsRef = ref.child("posts/-L-8XUrDGD6oIr0u8dxz");

// var newPostRef = postsRef.push();
// newPostRef.update({
  // author: "gracehopISGREAT",
  // title: "Announcing COBOL, a New Programming Language"
// });

// postsRef.update({
  // author: "alanisawesome",
  // title: "The Turing Machine???????"
// });

