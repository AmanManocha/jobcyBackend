const bcrypt = require('bcrypt');
const Users = require('../model/userSchema.js');


const signup = async (req, res) => {
    try {

      const { username, email, password } = req.body;
  
      // Check if the email is already registered
      const existingUser = await Users.findOne({ email: email });
      
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists.' });
      }

      // Check if the username is already registered
      const existingUsername = await Users.findOne({ username });
      
      if (existingUsername) {
        return res.status(400).json({ message: 'Username already exists.' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new Users({ username, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'Signup successful.' });
    } catch (error) {
      console.error('error', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };


  
module.exports = signup;