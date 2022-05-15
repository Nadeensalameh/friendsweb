/* eslint-disable no-undef */
// const Repositoryusers = require("../Repository/Repositoryusers");
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



// get users
router.get("/", isDevelopment ? cors() : nothing(), async (req, res) => {
  const selectQuery = "select * from users";
  db.query(selectQuery, (err, result) => {
    if (result.length === 0) {
      res.send({ message: "failed" });
    } else {
      res.send({ data: result });
    }
  });

});


// Get By Email
router.post("/users", isDevelopment ? cors() : nothing(), async (req, res) => {
  //   let result = [];
  const email = req.body.email;
  console.log("Email", email);
  const selectQuery = "select * from users where email='" + email + "'";
  db.query(selectQuery, (err, result) => {
    if (result.length === 0) {
      res.send({ message: "failed" });
    } else {
      res.send({ message: "passed", userType: result[0].userTypeId });
    }
  });

});

// add new user
router.post(
  "/new-user",
  isDevelopment ? cors() : nothing(),
  async (req, res) => {
    const { username, password, Email, Country } = req.body;
    console.log("User Details", username);
    let userType = "";
    if (Email !== "nadeen.salameh6@gmail.com") {
      userType = "user";
    } else {
      userType = "admin";
    }
    let insertSql =
      "INSERT INTO users (username, password, email, userTypeId, Country, score) VALUES ('" +
      username +
      "', '" +
      password +
      "','" +
      Email +
      "', '" +
      userType +
      "','" +
      Country +
      "','0')";
    console.log("Query", insertSql);

    db.query(insertSql, (err, result) => {
      if (err) return res.send(err);
      console.log("inseted");
      return res.send(result);
    });
  }
);



router.post("/updateuser", isDevelopment ? cors() : nothing(), async (req, res) => {
  // const email = req.body.email;
  const { Username, Password, Email } = req.body;
  console.log("Email", Username, Password, Email);
  // const selectQuery = "select * from users where email='" + email + "'";
  const updateUserQuery = "update users set username='" + Username + "',password='" + Password + "' where email='" + Email + "'";
  console.log("Update Query", updateUserQuery)
  db.query(updateUserQuery, (err, result) => {
    if (result.length === 0) {
      res.send({ message: "failed" });
    } else {
      res.send({ message: "Updated" });
    }
  });

});

// Get users username
router.post("/username", isDevelopment ? cors() : nothing(), async (req, res) => {
  const email = req.body.email;
  console.log("Email", email);
  const selectQuery = "select * from users where email='" + email + "'";
  db.query(selectQuery, (err, result) => {
    if (result.length === 0) {
      res.send({ message: "failed" });
    } else {
      res.send({ message: "passed", username: result[0].username });
    }
  });

});

// Delete By Email
router.post("/deleteuser", isDevelopment ? cors() : nothing(), async (req, res) => {
  const email = req.body.email;
  console.log("Email", email);
  // const selectQuery = "select * from users where email='" + email + "'";
  const deleteQuery = "delete from users where email='" + email + "'";
  db.query(deleteQuery, (err, result) => {
    if (result.length === 0) {
      res.send({ message: "failed" });
    } else {
      res.send({ message: "passed" });
    }
  });

});





module.exports = router;
