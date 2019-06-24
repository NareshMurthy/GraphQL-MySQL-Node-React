const { sequelize } = require("./models/database");
const models = require("./models");

const createData = async () => {
  await models.User.create(
    {
      name: "Naresh",
      cars: [
        {
          make: "Italy",
          model: "Aventador",
          color: "Black"
        }
      ]
    },
    {
      include: [models.Car]
    }
  );
};
sequelize.sync({ force: true }).then(async () => {
  try {
    await createData();
    process.exit();
  } catch (error) {
    console.log(error);
  }
});
