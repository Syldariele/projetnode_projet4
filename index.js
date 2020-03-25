const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("SERVEUR STARTED !");
});

app.get("/", (req, res) => {
    res.send({
        id: 1,
        email: "beru666@live.fr",
        firstname: "berengere",
        lastname: "grosset",
        birthdate: new Date(1978, 3, 4),
    });
});