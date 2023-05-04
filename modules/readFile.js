const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

module.exports = (message, dirName) => {
	let path = prompt(message);
	try {
		const file = fs.readFileSync(`${dirName}/${path}`, "utf-8");
		return file;
	} catch {
		console.log(`No file exists by this path: ${path}`);
		process.exit();
	}
};
