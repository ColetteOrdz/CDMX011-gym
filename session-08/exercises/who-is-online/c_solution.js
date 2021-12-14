const whosOnline = (friends) => {
  let users = {};
  users["online"] = [];
  users["offline"] = [];
  users["away"] = [];

  friends.forEach((objeto) => {
    if (objeto.status == "online" && objeto.lastActivity <= 10) {
      users["online"].push(objeto.username);
    } else if (objeto.status == "offline") {
      users["offline"].push(objeto.username);
    } else if (objeto.status == "online" && objeto.lastActivity > 10) {
      users["away"].push(objeto.username);
    }
  });
  for (prop in users) {
    if (users[prop].length === 0) {
      delete users[prop];
    }
  }
  //console.log(users)
  return users;
};

//URL: https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript