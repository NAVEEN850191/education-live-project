// as of now the utils is not using beacuse every controller has 
// its own CRUD formatting so  This file is not deploying now ...
// Its for future a
 
 
 const { errorResponse } = require("../utils/responseHandler");

const validateFields = (requiredFields) => {
  return (req, res, next) => {

    const missingFields = requiredFields.filter(
      (field) => {
        const value = req.body[field];

        return (
          value === undefined ||
          value === null ||
          value === ""
        );
      }
    );

    if (missingFields.length > 0) {
      return errorResponse(
        res,
        `Missing required field(s): ${missingFields.join(", ")}`,
        400
      );
    }

    next();
  };
};

module.exports = validateFields;