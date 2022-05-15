/* eslint-disable no-undef */
const express = require("express");
const db = require("../connection");
const router = express.Router();
const cors = require("cors");
const isDevelopment = true;
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
if (isDevelopment) {
    router.use(
        cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
    );
}
function non() { }


// Get data from instructions

router.post(
    "/getInstructions",
    isDevelopment ? cors() : nothing(),
    async (req, res) => {
        const email = req?.body?.email;
        console.log("Email", email);
        const selectQuery = "select * from instructions";
        db.query(selectQuery, (err, result) => {
            if (result.length === 0) {
                res.send({ message: "failed" });
            } else {
                res.send({ data: result });
            }
        });
    }
);



// Get data from ingredients

router.post(
    "/getIngredients",
    // eslint-disable-next-line no-undef
    isDevelopment ? cors() : nothing(),
    async (req, res) => {
        const email = req?.body?.email;
        // console.log("Email", email);
        const selectQuery = "select * from ingredients";
        db.query(selectQuery, (err, result) => {
            if (result.length === 0) {
                res.send({ message: "failed" });
            } else {
                res.send({ data: result });
            }
        });
    }
);


router.post(
    "/getDescription",
    isDevelopment ? cors() : nothing(),
    async (req, res) => {
        const email = req?.body?.email;
        console.log("Email", email);
        const selectQuery = "select * from recipies";
        db.query(selectQuery, (err, result) => {
            if (result.length === 0) {
                res.send({ message: "failed" });
            } else {
                res.send({ data: result });
            }
        });
    }
);


module.exports = router;
