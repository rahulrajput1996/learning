let n = 5;

for (let index = 0; index < n; index++) {
    let spaceStr = "";
    let startStr = "";
    for (let index2 = 0; index2 < index; index2++) {
        spaceStr = spaceStr + " "
    }
    for (let index3 = n - index; index3 > 0; index3--) {
        startStr = startStr + "*";
    }
    console.log(spaceStr + startStr);
}