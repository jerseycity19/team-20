const { User, Receipt, Order } = require('../database/models');

const users = require('../data/users');

const populateUsersTable = async (users) => {
  for (let i = 0; i < users.length; i++) {
    
    let currentUser = users[i];
    await User.create(currentUser);
  }
}

const seedDatabase = async () => {
  try {
    await populateUsersTable(users);
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDatabase();
