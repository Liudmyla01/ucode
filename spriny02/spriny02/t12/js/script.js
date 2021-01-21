
function tree(m) {
    let res = "";
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= i; j++) {
        res += `*`;
      }
      res += "\n";
    }
    alert(res);
  }  
  tree(6);