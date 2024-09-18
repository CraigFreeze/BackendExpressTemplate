const hello = (req, res) => {
    res.send(`Hello World! // Request Headers: ${JSON.stringify(req.headers)}`);

};

module.exports = {
    hello
}