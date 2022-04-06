const express = require("express");
const app = express();
const port = process.env.PORT;
const usersRouter = require("./routes/users");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.get("/", (req, res) => {
  res.json({ message: "express server running" });
});

app.listen(port, () => {
  console.log("App listening on port 3000");
});
