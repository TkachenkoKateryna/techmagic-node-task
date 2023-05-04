const http = require("http");
const url = require("url");
const readFile = require("./modules/readFile");
const replaceTemplate = require("./modules/replaceTemplate");

const port = 3000;

template = readFile(
	"Please, enter the path to the template file (ex: public/template.html) ",
	__dirname
);
data = readFile(
	"Please, enter the path to the data file (ex: data/template-data.json) ",
	__dirname
);
dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
	const { pathname } = url.parse(req.url, true);

	try {
		if (pathname === "/") {
			res.writeHead(200, { "Content-type": "text/html" });
			const output = replaceTemplate(template, dataObj);
			res.end(output);
		} else {
			res.writeHead(404, {
				"Content-type": "text/html",
			});
			res.end("<h1>Page not found</h1>");
		}
	} catch {
		res.end("Error ocurred");
	}
});

server.listen(port, "127.0.0.1", () => {
	console.log(`Listening to requests on port ${port}`);
});
