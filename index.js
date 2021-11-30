const { excuteQuery } = require("./config/db");
const jwt = require("jsonwebtoken");

const getUserJWT = (username) => {
  return new Promise((resolve, reject) => {
    let arrayParams = [username];
    let query = `CALL getUserJwt(?)`;
    excuteQuery(query, arrayParams).then((data) => {
      console.log(data);
      if (data[0][0] != null) {
        let userData = [];
        userData = data[0][0];
        let userInfo = {};
        userInfo.user_id = userData.user_id;
        userInfo.username = userData.username;
        userInfo.last_name = userData.last_name;
        userInfo.email = userData.email;
        userInfo.phone = userData.phone;
        userInfo.age = userData.age;
        userInfo.companyName = userData.companyName;
        userInfo.locationName = userData.locationName;
        userInfo.status = userData.status;
        userInfo.userImage = userData.userImage;
        userInfo.timezone = userData.timezone;
        userInfo.office_code = userData.office_code;
        userInfo.jobTitle = userData.jobTitle;
        let finalUserData = JSON.stringify(userInfo);

        let encode64payload = Buffer.from(finalUserData).toString("base64");
        console.log(encode64payload);
        let jwtPayload = {};
        const secret = "cool";
        let issuatAt = Math.floor(Date.now() / 1000) - 30;
        jwtPayload.iat = issuatAt;
        jwtPayload.encode64payload = encode64payload;
        const signed = jwt.sign(jwtPayload, secret, {
          algorithm: "HS256",
          expiresIn: "1hr",
        });
        console.log("signed", signed);
        resolve(signed);
      } else {
        reject(Error("user not found"));
      }
    });
  });
};

getUserJWT("mahi");
