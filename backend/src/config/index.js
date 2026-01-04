

const config = {
    port : process.env.PORT,
    jwtSecret : process.env.JWT_SECRET,
    mongoUri : process.env.MONGO_URI
};


if (!config.mongoUri) {
  throw new Error("MONGO_URI is missing");
}

export {config};