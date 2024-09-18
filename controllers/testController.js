const test = (req, res) => {
    res.send(`TEST // Request Headers: ${JSON.stringify(req.headers)}`);
};

module.exports = {
    test
}