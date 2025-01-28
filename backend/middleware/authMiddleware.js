import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req?.headers?.authorization;

    if (!authHeader || !authHeader?.startswith("Bearer")) {
        return res
            .status(401)
            .json({ status: "auth_failed", messages: "authentication == failed" });
    }

    const token = authHeader?.split(" ")[1];

    try {
        const userToken = JWT.verify(tokem, process.env.JWT_SECRET);

        req.body.user = {
            userId: userToken.userId,
        };

        next();
    }   catch (error) {
        console.log(error);
        return res
            .status(401)
            .json({ status: "auth_failed", message: "authentication Failed" });
    }
};

export default authMiddleware;