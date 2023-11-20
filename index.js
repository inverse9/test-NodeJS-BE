const express = require("express");
const app = express();
const port = 4444;
const userRouter = require("./routes/user");

app.use(express.json());

app.get("/", (_, res) => res.json({ message: "ok" }));

app.use("/user", userRouter);

app.listen(port, () => console.log(`started on http://localhost:${port}`));
