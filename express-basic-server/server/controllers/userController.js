module.exports = {
  getAllUsers: (req, res) => {
    res.send('User list');
  },
  addUser: (req, res) => {
    res.send('Add a new user');
  },
  updateUser: (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  },
  removeUser: (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  },
};
