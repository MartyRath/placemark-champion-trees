import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, maggieCreditials, singleTestProvince, singleUserTree, testProvinces, testUserTrees } from "../fixtures.js";

suite("User Tree API tests", () => {

  let user = null;
  let testProvince = null;

  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggieCreditials);
    await placemarkService.deleteAllUserTrees();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggieCreditials);
    singleTestProvince.userid = user._id;
    singleUserTree.userid = user._id;
    testProvince = await placemarkService.getProvinceByTitle(singleTestProvince.title);
  });

  teardown(async () => {});

  test("add user tree", async () => {
    // Need province title, userid and tree object to make new tree
    const newUserTree = await placemarkService.addUserTree(singleTestProvince.title, user._id, singleUserTree);
    assert.isNotNull(newUserTree);
    assertSubset(singleUserTree, newUserTree);
  });

  test("get user trees by user id and province", async () => {
    const userTrees = await placemarkService.getUserTreesByUserIdAndProvince(user._id, singleTestProvince.title);
    assert.isNotNull(userTrees);
    assertSubset(userTrees, testUserTrees);
  });

  test("delete all user trees", async () => {
    await placemarkService.deleteAllUserTrees();
    const userTrees = await placemarkService.getAllUserTrees();
    assert.equal(userTrees.length, 0);
  });

});