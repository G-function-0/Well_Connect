import crypto from "crypto";


const generateRefreshToken = () => {
    const refreshToken = crypto.randomBytes(40).toString('hex');
    return refreshToken;
}



const revokeRefreshToken = async (refreshToken) => {
    await RefreshModel.deleteOne({refreshToken});
}
export {generateRefreshToken, validateRefereshToken , revokeRefreshToken}