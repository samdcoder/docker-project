const express = require('express');
const app = express();

http.get('*', function(req, res) {  
    res.redirect('http://' + req.headers.host + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

app.get('/', (req, res) => {
	return res.send('<html> <img width="100%" height="100%" src="https://picsum.photos/200" /> </ 	html>');
})


app.listen(3000, () => {
	console.log('app listening on port 3000');
})