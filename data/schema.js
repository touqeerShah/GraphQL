import { buildSchema } from "graphql";

const schema = buildSchema(`
type Product{
    id:ID,
    name:String,
    price:Float,
    isSold:Boolean,
    stories:[Store]!
}
type Store{
    name:String
}
type Query{
    getProduct(id:ID):Product 
    getAllProduct:[Product]
}
input StoreInput{
    name:String
}
input Productinput{
    id:ID,
    name:String,
    price:Float,
    isSold:Boolean,
    stories:[StoreInput]!
}
input UpdateProductName{
    id:ID,
    price:Float,
   
}
type Mutation{
    createProduct(input:Productinput):Product
    updateProduct(input:UpdateProductName):Product

}

`);

export default schema;
