angular.module('userList')
    .controller('UserListController', UserListController);

function UserListController(userListService) {
    this.users = [];

    userListService().then((users) => {
        this.users = users;
    });
}
