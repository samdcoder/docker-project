const express = require('express');
const app = express();

app.get('/', (req, res) => {
	return res.send('<html> <img width="100%" height="100%" src="https://picsum.photos/200" /> </ 	html>');
})


app.listen(3000, () => {
	console.log('app listening on port 3000');
})