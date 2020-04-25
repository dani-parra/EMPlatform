const statement = {
    insertActivity : `INSERT INTO Activity(UserUUID, Latitude, Longitude, GeoGranted, CameraGranted, CreatedAt) VALUES (?,?,?,?,?,now())`,
    getUserInfo : `SELECT password FROM Account WHERE email=? ;`
};

module.exports = statement;