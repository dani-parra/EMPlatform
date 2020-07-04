const statement = {
    getUserInfo : `SELECT password FROM Account WHERE email=? ;`,
    saveNewSale : `INSERT INTO Sale(productId, amount, sellerId, buyerId, saleDate) VALUES(?,?,?,?,?)`
};

module.exports = statement;