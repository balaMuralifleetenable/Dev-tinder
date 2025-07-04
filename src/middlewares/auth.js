const authorize = (roles = []) => (req, res, next) => {

    const token = req.headers['authorization'];

    const role = req.headers['x-user-role'];
    

    if (!roles.includes(role)) {
        return res.status(403).json({
            message: 'you dont have valid role to access this route'
        });
    }

    next();

    // if (token === 'abcd') return next();

    // return res.status(403).json({
    //     message: 'you dont have access'
    // });
}

module.exports = {
    authorize
}