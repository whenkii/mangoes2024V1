// module.exports = {
//   hrPool: {
//     user: process.env.HR_USER,
//     password: process.env.HR_PASSWORD,
//     connectString: process.env.HR_CONNECTIONSTRING,
//     poolMin: 10,
//     poolMax: 10,
//     poolIncrement: 0,
//   },
// };

// echo "export HR_USER=hr" >> ~/.bashrc
// echo "export HR_PASSWORD=oracle" >> ~/.bashrc
// echo "export HR_CONNECTIONSTRING=127.0.0.1/orcl" >> ~/.bashrc
// source ~/.bashrc

module.exports = {
  hrPool: {
    // user: "system",
    // password: "tnr311083",
    user: "admin",
    password: "311083@Venki",
    // connectString: "localhost:1521/VSC5VCO3V81J5XY5",
    // user: "admin",
    // password: "tnrstore123",
    connectString: "vsc5vco3v81j5xy5_low", // This is Oracle Cloud DB
    poolMin: 20,
    poolMax: 20,
    poolIncrement: 0,
    queueMax:0
  },
};
