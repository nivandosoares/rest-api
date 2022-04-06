const express = require("express");
const router = express.Router();
const user = require("../services/users");

/* GET user from database. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await user.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

/* POST user */
router.post("/", async function (req, res, next) {
  try {
    res.json(await user.create(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});

/* PUT user */

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await user.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});

/* DELETE user */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await user.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});
module.exports = router;
