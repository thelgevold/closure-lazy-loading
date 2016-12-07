export class Friends {
  
  constructor() {
    this.friends = this.getFriends();
    this.renderFriends();
  }

  getFriends() {
    return [{firstName: 'Joe', lastName: 'Smith', age: 20},
            {firstName: 'Jane', lastName: 'Doe', age: 30},
            {firstName: 'John', lastName: 'Doe', age: 40},
            {firstName: 'Peter', lastName: 'Jackson', age: 50}
           ];
  }

  renderFriends() {
    var friendsList = document.getElementById("friendslist");

    this.friends.forEach(function (friend) {
      var li = document.createElement("li");

      li.textContent = this.createText(friend);
      friendsList.appendChild(li);
    });
  }

  createText(friend) {
    return `${friend.firstName} ${friend.lastName}, age: ${friend.age}`;
  }
}