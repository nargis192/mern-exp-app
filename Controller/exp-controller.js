const expmodel = require('../models/Exp-model');

// this to show the data on screen else we wont be able to see the data or may say to view the data in frontend
module.exports.get = async (req, res) => {
     const data = await expmodel.find()
     res.send(data)
}

// module.exports.gettodo = async (req, res)=>{
//   const todo = await todomodel.find()
//   res.send(todo)
// }

// module.exports.get = async (req, res) => {
//     try {
//         // Assuming req.user contains the logged-in user's data and _id is their user ID
//         const userId = req.user._id; 
        
//         // Find expenses where the user field matches the logged-in user's ID
//         const data = await Expense.find({ user: userId });

//         res.status(200).send(data);
//         console.log(data)
//     } catch (error) {
//         console.error('Error fetching expenses:', error);
//         res.status(500).send({ message: 'An error occurred while fetching expenses.' });
//     }
// };

module.exports.save = async (req, res) => {
    try {
        const {topic, description, amount} = req.body;
        const data = await expmodel.create({topic, description, amount});
        console.log(data);
        res.status(201).send(data); // Use status 201 for resource creation
        console.log("Added successfully...");
    } catch (error) {
        console.error("Error saving expense:", error);
        res.status(500).send({ message: "An error occurred while saving the expense." });
    }
};

module.exports.update = async (req, res) => {
  try {
      const {_id,topic, description, amount } = req.body;

      await expmodel.findByIdAndUpdate(_id,{topic, description, amount})
      console.log("updated successfully...");
      res.send("updated successfully")
  } catch (error) {
      console.error("Error updating error expense:", error);
      res.status(500).send({ message: "An error occurred while updating the expense." });
  }
};

module.exports.Delete= async (req, res) => {
  try {
      const {_id} = req.body;

      await expmodel.findByIdAndDelete(_id)
     
      console.log("deleted successfully...");
      res.send("deleted successfully")
  } catch (error) {
      console.error("Error deleting error expense:", error);
      res.status(500).send({ message: "An error occurred while deleting the expense." });
  }
};
