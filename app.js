const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// assignment
const usersRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
//assignment
app.use(usersRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});

app.listen(3000);

// Mein 1jähriger Sohn wollte auch mit mir coden :-)
// jvjhgugjbhbbm,nljljhjbj
//     , thlkäkkmmö..- öllö -.--ää#ööööpp----
// +//#endregion###lö´
// #l.,..-lengthö+o0o.+#
//    njjjcln,l. .ll

// .-..--:
