import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Mari",
      email: "mari@jossain.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isSeller: false,
      
      
    },
    {
      name: "Terttu",
      email: "terttu@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
      isSeller: false,
    },
  ],
  products: [

    
  ],
};
export default data;
