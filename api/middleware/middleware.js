const Book = require("../models/books");

exports.paginatedResults = (model) => {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const key = req.query.key;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let query = {};
    if (key === "") {
      query = {};
    } else {
      query = {
        $or: [
          { bookName: { $regex: key, $options: "i" } },
          { authorName: { $regex: key, $options: "i" } },
        ],
      };
    }

    const results = {};
    try {
      results.totalCount = await model.countDocuments(query);
      results.results = await model
        .find(query)
        .skip(startIndex)
        .limit(limit)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};
