const express = require("express");
const router = express.Router();
const user = require("../services/user");

router.get("/", async (req, res) => {
  try {
    res.json(await user.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting user `, err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  try {
    res.json(await user.create(body));
  } catch (err) {
    console.error(`Error while creating user `, err.message);
    res.status(500).json({ message: err.message });
  }
});

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      res.json(await user.getById(req.params.id));
    } catch (err) {
      console.error(`Error while getting user `, err.message);
      res.status(500).json({ message: err.message });
    }
  })
  .put(async (req, res) => {
    try {
      res.json(await user.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating user `, err.message);
      res.status(500).json({ message: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      res.json(await user.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting user `, err.message);
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
