const usermodel = require('../models/User-model');


module.exports.signup = async (req, res) => {
  try {
    const { Name, Email, Password, Confirmpassword } = req.body;

    // Check if Password and Confirmpassword match
    // if (Password !== Confirmpassword) {
    //   console.log("Passwords do not match")
    //   return res.status(400).send({ Message: 'Passwords do not match' });

    // }

    // Create a new user
    const newuser = await usermodel.create({ Name, Email, Password, Confirmpassword });
    res.status(200).send(newuser);
    console.log(`In signup: ${newuser}`);
  } catch (error) {
    console.log('Error in signup page:', error);
    res.status(500).send({ Message: 'Signup page error' });
  }
};

// module.exports.login = async (req, res) => {
//   try {
//     const { Email, Password } = req.body;

//     // Find the user with the given email and password
//     const user = await usermodel.findOne({ Email, Password });

//     if (user) {
//       res.status(200).send(user);
//       console.log(`You are logged in successfully: ${user}`);
//     } else {
//       res.status(404).send({ Message: 'User does not exist' });
//       console.log('User does not exist');
//     }
//   } catch (error) {
//     console.log('Error in login page:', error);
//     res.status(500).send({ Message: 'Login page error' });
//   }
// };

module.exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await usermodel.findOne({ Email, Password });
    if (user) {
      res.status(200).send({ userId: user._id, user });
    } else {
      res.status(404).send({ Message: 'User does not exist' });
    }
  } catch (error) {
    console.log('Error in login page:', error);
    res.status(500).send({ Message: 'Login page error' });
  }
};

