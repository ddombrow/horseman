const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine("jsx", require('express-react-views').createEngine());

app.post("/test", function(req, res){
	var reportData = JSON.parse(req.body["report_data"]);
	res.render("hello", { title: "test", name: "Dan", data: reportData });
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})