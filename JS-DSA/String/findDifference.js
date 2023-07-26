// let A BE a string and t is the shuffling of A the string adding one more letter find the adding latter

function findTheDifference(s, t) {
  let s1 = s.split("").sort().join("");
  let t1 = t.split("").sort().join("");
  for (let i = 0; i < t1.length; i++) {
    if (s1[i] !== t1[i]) {
      return t1[i];
    }
  }
}

console.log(findTheDifference("abbdd", "dabadb"));
