const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const userRouter = require("./routes/user");
app.use(cors());

app.use(express.json());

app.get("/", (_, res) => res.json({ message: "ok" }));

app.use("/user", userRouter);

app.listen(port, () => console.log(`started on http://localhost:${port}`));
