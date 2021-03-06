const userResolvers = {
  Query: {
    users: (parent, args, { models }) => models.User.findAll(),
    user: (parent, { id }, { models }) => {
      return models.User.findByPk(id);
    }
    // me: (parent, args, { me }) => me
  },
  Mutation: {
    makeUser: (parent, { id, name }, { models }) => {
      const user = { id, name };
      return models.User.create(user);
    },
    removeUser: (parent, { id }, { models }) => {
      return models.User.destroy({
        where: {
          id
        }
      });
    }
  },

  User: {
    car: (parent, args, { models }) => {
      return models.Car.findAll({
        where: {
          userId: parent.id
        }
      });
    }
  }
};

module.exports = userResolvers;
