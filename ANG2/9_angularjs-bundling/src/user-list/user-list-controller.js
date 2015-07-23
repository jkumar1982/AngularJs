export default function UserListController(userListService) {
    this.users = [];

    userListService().then((users) => {
        this.users = users;
    });
}
