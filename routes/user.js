const express = require("express");
const router = express.Router();
const user = require("../services/user");

router.get("/", async (req, res, next) => {
  try {
    res.json(await user.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting user `, err.message);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.json(await user.create(req.body));
  } catch (err) {
    console.error(`Error while creating user `, err.message);
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    res.json(await user.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user `, err.message);
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    res.json(await user.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user `, err.message);
    next(err);
  }
});

module.exports = router;
