require("dotenv/config");
const fs = require("fs");
const { RoleUser } = require("./src/models/index");
const faker = require("faker");
const listData = [];
const {
  MigrateUtils,
  MigrateMotelCate,
  MigrateMotel,
  MigrateRoleUser,
  MigrateUser,
} = require("./backup/migrate/index");

const createFakeUser = require("./backup/createFakeUser");

const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err, db) {
    if (!err) console.log("Connecting database");

    // List Function migrate First
    {
      // MigrateMotelCate();
      // MigrateUtils();
      // MigrateRoleUser();
      // MigrateUser();
    }
    // the second
    {
      // MigrateMotel();
    }
  }
);
// Detect full-address crawl and real db.
// Only use in HCM city
