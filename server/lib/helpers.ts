/*import jwt from 'jsonwebtoken';
 
exports.signToken = (user) => {
    const {_id, email, name, role } = user;
    let token;
    try {
        token = jwt.sign({
            data: { email, name, role ,_id}
        }, config.tokenSecret, { expiresIn: '1h' });
        return { token, user: { email, name, role,_id } };
    } catch (error) {
        console.log("Token error : ", error)
        throw new Error("Beklenmeyen bir hata olustu!")
    }
}

exports.validateToken = (token) => {
    return new Promise((resolve, reject) => {
        // verify a token symmetric
        jwt.verify(token, config.tokenSecret, (err, decoded) => {
            if (err) reject(err)
            resolve(decoded)
        });
    })

}*/