'use strict';

module.exports = (req, res, next) => {
  // validate query string for name property
  let { name } = req.query;

  // console.log(req);
  // console.log(`name ${name}`);
  try {
    if (name) {
      res.status(200).send(`name: ${name}`);
    } else {
      res.status(500).send('Name Not Found.');
    }
  } catch (error) {
    next(error);
  }
  next();
};
