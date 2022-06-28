const dotenv = require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(process.env.DB_URL);

//Get Projects data
const getProjectsData = async function (req, res) {
    try {
        const connection = await client.connect();
        const db = connection.db("portfolio");

		const projectsData = await db.collection("projects").find({}).toArray();
        const skillsData = await db.collection("skills").find({}).toArray();
        const achievementsData = await db.collection("achievements").find({}).toArray()
		
		let portfolioData = [];
		portfolioData.push(projectsData, skillsData, achievementsData);

		res.json(portfolioData);
        await connection.close();
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getProjectsData }