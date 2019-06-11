const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require("axios");

// Book routes
router.use("/books", bookRoutes);
router.get("/books", (req, res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;