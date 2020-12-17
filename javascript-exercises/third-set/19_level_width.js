// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const { Node } = require('./data_structures/trees');

function levelWidth(root) {
	

}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(levelWidth(root)) // [1, 3, 2]

const root2 = new Node(0);
root2.add(1);
root2.children[0].add(2);
root2.children[0].add(3);
root2.children[0].children[0].add(4);

console.log(levelWidth(root2)) // [1, 1, 2, 1]
