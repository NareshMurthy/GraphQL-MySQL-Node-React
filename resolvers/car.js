const carResolvers = {
  Query: {
    cars: (parent, args, { models }) => models.Car.findAll(),
    car: (parent, { id }, { models }) => {
      return models.Car.findByPk(id);
    }
  },
  Mutation: {
    createCar: (parent, { make, model, color }, { models }) => {
      const car = { make, model, color };
      return models.Car.create(car);
    },
    removeCar: (parent, { id }, { models }) => {
      return models.Car.destroy({
        where: { id }
      });
    }
  },
  Car: {
    owner: parent => {
      return models.User.findByPk(parent.UserId);
    }
  }
};
module.exports = carResolvers;
