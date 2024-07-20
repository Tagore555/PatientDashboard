const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');



const postLogout = asyncHandler(async (req, res) => {
    
res.status(200).json({ message: 'Logout Success' }); // Sends a success response
});


module.exports = { postLogout };