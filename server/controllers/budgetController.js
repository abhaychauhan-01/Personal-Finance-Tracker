const User = require("../models/User");

const getBudget = async (req, res) => {
try {
const user = await User.findById(
req.user._id
);


res.json({
  monthlyBudget:
    user.monthlyBudget,
});


} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

const updateBudget = async (
req,
res
) => {
try {
const { monthlyBudget } =
req.body;


const user =
  await User.findById(
    req.user._id
  );

user.monthlyBudget =
  monthlyBudget;

await user.save();

res.json({
  monthlyBudget:
    user.monthlyBudget,
});


} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

module.exports = {
getBudget,
updateBudget,
};
