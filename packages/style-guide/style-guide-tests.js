// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by style-guide.js.
import { name as packageName } from "meteor/style-guide";

// Write your tests here!
// Here is an example.
Tinytest.add('style-guide - example', function(test) {
    test.equal(packageName, "style-guide");
});
