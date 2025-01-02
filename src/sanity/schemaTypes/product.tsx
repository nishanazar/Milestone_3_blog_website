const productSchema = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
   
    {
        name: "name",
        title: "Name of Product",
        type: "string",
    },
    {
        name: "images",
        title: "Product Images",
        type: "array",
        of :[{type: "image"}]
    },
    {
        name: "description",
        title: "Description of product ",
        type: "text",
        
    },
    {
        name: "slug",//Slug ek URL-friendly aur unique identifier hai jo kisi product ya content ko represent karta hai.
        title: "Product Slug",
        type: "slug",
        options: {
            source: 'name',
        }
    },
    {
        name: "price",
        title: "Price",
        type: "number",
       
    },
   
       
    ],
};
export default productSchema;