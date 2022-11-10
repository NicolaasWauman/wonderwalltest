import { PapersCollection } from "../db/PapersCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish("papers", function publishPapers() {
  // No arrow function if using 'this', points to meteor

  return PapersCollection.find();
});
