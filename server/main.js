import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { PapersCollection } from "../imports/db/PapersCollection";
import "/imports/api/papersMethods";
import "/imports/api/paperPublications";

import papers from "../public/papers.json";

const SEED_USERNAME = "user";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (PapersCollection.find({}).count() < 1) {
    papers.map((paper) => {
      PapersCollection.insert(paper);
    });
  }

  // if (!Accounts.findUserByUsername(SEED_USERNAME)) {
  //   Accounts.createUser({
  //     username: SEED_USERNAME,
  //     password: SEED_PASSWORD,
  //   });
  // }
  //SEND USER DATA
  // Meteor.publish("users", function () {
  //   console.log("Server Log: publishing all users");
  //   return Meteor.users.find();
  // });
  // Meteor.publish("userData", function () {
  //   if (this.userId) {
  //     return Meteor.users.find(
  //       { _id: this.userId },
  //       {
  //         fields: { other: 1, things: 1 },
  //       }
  //     );
  //   } else {
  //     this.ready();
  //   }
  // });
});

// Accounts.validateNewUser((user) => {
//   new SimpleSchema({
//     _id: { type: String },
//     username: { type: String },
//     emails: { type: Array },
//     "emails.$": { type: Object },
//     "emails.$.address": { type: String },
//     "emails.$.verified": { type: Boolean },
//     createdAt: { type: Date },
//     services: { type: Object, blackbox: true },
//   }).validate(user);

// Return true to allow user creation to proceed
// return true;
// });
