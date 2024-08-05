const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
// assignment
const usersRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
//assignment
app.use(usersRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

// Mein 1jähriger Sohn wollte auch mit mir coden :-)
// jvjhgugjbhbbm,nljljhjbj
//     , thlkäkkmmö..- öllö -.--ää#ööööpp----
// +//#endregion###lö´
// #l.,..-lengthö+o0o.+#
//    njjjcln,l. .ll

// .-..--:
