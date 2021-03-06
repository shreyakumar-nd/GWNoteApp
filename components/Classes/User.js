class User {
  constructor(id, email, password, name, position, auth_token, initials) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.password = password;
    this.position = position;
    this.auth_token = auth_token;
    this.initials = initials;
  }

  update(name, password, position){
    this.name = name;
    this.password = password;
    this.position = position;
  }

  addAuthToken(auth_token) {
    this.auth_token = auth_token;
  }

  checkPassword(password) {
    return this.password === password;
  }
}

class UserList {
  constructor(users = []) {
    this.list = users;
  }

  addUser(user) {
    this.list.push(user);
  }

  getUserById(id) {
    return this.list.find((user) => user.id == id);
  }
}

export { User, UserList };
