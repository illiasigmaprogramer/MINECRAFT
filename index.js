import express from "express";
app.use(express.static("public"));
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "MINECRAFT",
  password: "123456",
  port: 5432,
});
db.connect();