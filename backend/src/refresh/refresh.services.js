import crypto from "crypto";


const generateRefreshToken = () => {
    const refreshToken = crypto.randomBytes(40).toString('hex');
    return refreshToken;
}


const validateRefereshToken = (refreshToken) => {
     
}

const revokeRefreshToken = () => {

}
export {generateRefreshToken, validateRefereshToken , revokeRefreshToken}