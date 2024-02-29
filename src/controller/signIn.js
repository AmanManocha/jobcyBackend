const bcrypt = require('bcrypt');
const User = require('../model/userSchema.js');
const generateToken = require('../middelware/generateToken.js');


const signin = async (req, res) => {
    try {
        console.log(req.body)
      const { username, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: "User doesn't exist." });
      }
  
      // Check the password
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (!verifyPassword) {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }
      const token = generateToken(user);
  
      res.status(200).json({ message: 'Login successful.',token, userId: user._id});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };

  module.exports = signin;