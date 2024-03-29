import { v4 } from "uuid";

let trees = [];

export const userTreeMemStore = {
  async getAllTrees() {
    return trees;
  },

  async addTree(provinceTitle, userId, tree) {
    tree._id = v4();
    tree.provinceTitle = provinceTitle;
    tree.userid = userId;
    trees.push(tree);
    return tree;
  },

  async getTreesByUserIdAndProvince(province, userId) {
    return trees.filter((tree) => tree.userid === userId && tree.provinceTitle === province);
  },

  async getTreeById(id) {
    let foundTree = trees.find((tree) => tree._id === id);
    if (!foundTree) {
      foundTree = null;
    }
    return foundTree;
  },

  async deleteTree(id) {
    const index = trees.findIndex((tree) => tree._id === id);
    if (index !== -1) trees.splice(index, 1);
  },

  async deleteAllTrees() {
    trees = [];
  },

  async updateTree(tree, updatedTree) {
    tree.species = updatedTree.species;
    tree.height = updatedTree.height;
    tree.girth = updatedTree.girth;
    tree.county = updatedTree.county;
  },
};