const mkdir = require("./module");
mkdir("demo/test", err => {
  console.log(err);
});

mkdir("demo01", err => {
  console.log(err);
});

mkdir("demo02/demo03/demo04", err => {
  console.log(err);
});
