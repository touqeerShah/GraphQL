import { Product } from "./dbConnection";

export const resolvers = {
  product: () => {
    return {
      id: "sdasdasda",
      name: "Switch",
      price: 12.22,
      isSold: false,
      stories: [
        {
          name: "a",
        },
        {
          name: "b",
        },
      ],
    };
  },
  getProduct: async ({ id }) => {
    return await Product.findById({ _id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.message;
      });
  },
  createProduct: ({ input }) => {
    const prduct = new Product({
      name: input.name,
      price: input.price,
      isSold: input.isSold,
      stories: input.stories,
    });
    prduct.id = prduct._id;
    prduct.save();
    return prduct;
  },
  updateProduct: async ({ input }) => {
    const updatedProduct = await Product.findOneAndUpdate(
      {
        _id: input.id,
      },
      {
        $set: {
          price: input.price,
        },
      },
      { new: true }
    );
    return updatedProduct;
  },
  getAllProduct: async () => {
    const allProduct = await Product.find();

    return allProduct;
  },
};
