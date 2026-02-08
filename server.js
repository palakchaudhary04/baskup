const User = require("./models/user");

const Product = require("./models/product");

app.get("/products", async (req,res)=>{
  const products = await Product.find();
  res.json(products);
});
app.post("/products", async(req,res)=>{
  const product = new Product(req.body);
  await product.save();
  res.json({message:"Product added"});
});
// Signup
app.post("/signup", async (req,res)=>{
  const user = new User(req.body);
  await user.save();
  res.json({message:"Signup successful"});
});

// Login
app.post("/login", async (req,res)=>{
  const user = await User.findOne(req.body);
  if(!user) return res.status(401).json({message:"Invalid login"});
  res.json(user);
});
