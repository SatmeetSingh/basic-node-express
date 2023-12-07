const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/aboutme", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/pagenotfound.html`);
});

console.log(publicPath);

app.listen(5501);

// app.get("", (req, res) => {
//   console.log("data send by browser", req.query.name);
//   res.send(`
//   <h1>Welcome, to home page.
//   <br />
//   </h1>
//   <a href="/about">Go to about page</a>
//   `);
// });

// app.get("/about", (req, res) => {
//   res.send(`
//   <input type="text" placeholder="User name" value= "${req.query.name}" />
//   <button >Click Here</button>
//   <br />
//   <br />
//   <a href="/">Go to home page</a>

//   `);
// });

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Satmeet Singh",
//       email: "satmeet@gmail.com",
//     },
//     {
//       name: "Satmeet ",
//       email: "satmeetsingh@gmail.com",
//     },
//   ]);
// });
