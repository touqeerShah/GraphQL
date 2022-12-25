import mongoose from "mongoose";
import { dbSchema } from "./product";
import { Sequelize, DataTypes } from "sequelize";
import _ from "lodash";
import casual from "casual";
//mongo connection
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://root:rootpassword@localhost:27017/admin", {
  useNewUrlParser: true,
});

// SQL connection

const sequelize = new Sequelize("sqlite::memory");
const Categories = sequelize.define("categories", {
  categoriesName: DataTypes.STRING,
  categoriesDesciprion: DataTypes.STRING,
});

Categories.sync({ force: true }).then(() => {
  _.times(5, (i) => {
    Categories.create({
      categoriesName: casual.word,
      categoriesDesciprion: casual.sentence,
    });
  });
});
const Product = mongoose.model("Product", dbSchema);
export { Categories, Product };
