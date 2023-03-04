import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const { jwtoken } = req.cookies;

  if (!jwtoken) {
    return console.log("no jwtoken");
  }

  jwt.verify(jwtoken, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      next();
    }
  });
};

export default requireAuth;
