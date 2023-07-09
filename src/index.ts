import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.listen(5555, () => {
  console.log("listening to http://localhost:3001");
});
