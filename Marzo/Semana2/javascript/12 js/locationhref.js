const url = location.href;
const last = url.lastIndexOf("/");
const x = url.substring(last + 1);

console.log(x)