const mysql = require('mysql2');
const { append } = require('vary');

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'cdac',
	database: 'test',
	port: 3306
});
const mysql.createconnection(dbparams);
app.get('/getBookid'), (rep, resp) => {
	console.log(Bookid);

	let output = { status: false, Bookid: 0, bookname: "", price: 0 }
}
connection.query = ('select * from book  where Bookid = ?'), [Bookid],


const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.post('/poc1', function (req, res) {

	console.log("reading input " + req.body.v1 + "  second " + req.body.v2)

	var xyz = { v1: 37, v2: 35 };
	res.send(xyz);
});


app.get('/poc2', function (req, res) {


	console.log("reading input " + req.query.xyz);

	var xyz = { v1: 37, v2: 35 };

	res.send(xyz);

});




app.listen(8081, function () {
	console.log("server listening at port 8081...");
});