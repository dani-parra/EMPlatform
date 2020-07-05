const jwt = require('jsonwebtoken');
let functions = {};

functions.generate = body => {
    return jwt.sign({data : body},process.env.JWT_SECRET, {expiresIn: '30m'});
}

functions.validate = token => {
    
}

functions.decompose = token => {
    
}

functions.removeLastElements = (string, index) => {
    return string.substring(0,string.length - index);
}

module.exports = functions;