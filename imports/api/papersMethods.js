import { check } from "meteor/check";
import { PapersCollection } from "../db/PapersCollection";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "papers.insert"(paper) {
    // check(text, Object);
    // if (!this.userId) {
    //   throw new Meteor.Error("Not Autherized");
    // }
    PapersCollection.insert(
      paper
      // {      text: text.trim(),
      // createdAt: new Date(),
      // userId: user._Id,}
    );
  },
  "papers.remove"(paperId) {
    check(paperId, String);
    if (!this.userId) {
      throw new Meteor.Error("Not Autherized");
    }
    PapersCollection.remove(paperId);
  },
  "papers.update"(paperId, update) {
    check(paperId, String);
    check(update, Object);
    if (!this.userId) {
      throw new Meteor.Error("Not Autherized");
    }
    PapersCollection.update(paperId, { $set: { update } });
  },
});
