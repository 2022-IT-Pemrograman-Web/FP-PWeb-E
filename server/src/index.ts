import express from "express";
var { expressjwt: jwt } = require("express-jwt");
var jwks = require("jwks-rsa");
import { PrismaClient } from "@prisma/client";
import { checkSchema, validationResult, sanitizeBody } from "express-validator";

const prisma = new PrismaClient();
const app = express();
var port = 5000;

var jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: "https://dev-5pvvajiehcpn55g6.us.auth0.com/.well-known/jwks.json",
	}),
	audience: "https://vue-express-api.com",
	issuer: "https://dev-5pvvajiehcpn55g6.us.auth0.com/",
	algorithms: ["RS256"],
});

app.use(express.json());
app.use(jwtCheck);

app.get("/public/campaign", async (req, res) => {
	const campaigns = await prisma.campaign.findMany();
	res.status(200).json(campaigns);
});

app.post("/campaign", async (req: express.Request, res: express.Response) => {
	try {
		const campaign = await prisma.campaign.create({
			data: { ...req.body },
		});
		res.status(201).json({ msg: "Campaign created succesfully" + campaign.id });
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
	}
	res.send(402).json({ msg: "Something went wrong" });
});

app.get("/campaign", async (req, res) => {
	const userId = req.body.userId;
	const campaigns = await prisma.campaign.findMany({
		where: { userId: userId },
	});
	if (campaigns) {
		res.status(200).json(campaigns);
	}
	res.status(404).json({ msg: "No campaigns found" });
});

app.put("/campaign", async (req, res) => {
	try {
		const campaign = await prisma.campaign.update({
			where: { id: req.body.id },
			data: { ...req.body },
		});
		res.status(201).json({ msg: "Campaign updated succesfully" + campaign.id });
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
	}
	res.send(402).json({ msg: "Something went wrong" });
});

app.delete("/campaign", async (req, res) => {
	try {
		const campaign = await prisma.campaign.delete({
			where: { id: req.body.id },
		});
		res.status(201).json({ msg: "Campaign deleted succesfully" + campaign.id });
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
	}
	res.send(402).json({ msg: "Something went wrong" });
});

app.get("/channel", async (req, res) => {
	const userId = req.body.userId;
	const channels = await prisma.channel.findMany({
		where: { userId: userId },
	});
	if (channels) {
		res.status(200).json(channels);
	}
	res.status(404).json({ msg: "No channels found" });
});

app.post("/channel", async (req, res) => {
	try {
		const channel = await prisma.channel.create({
			data: { ...req.body },
		});
		res.status(201).json({ msg: "Channel created succesfully" + channel.id });
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
	}
	res.send(402).json({ msg: "Something went wrong" });
});

app.put("/channel", async (req, res) => {
	try {
		const channel = await prisma.channel.update({
			where: { id: req.body.id },
			data: { ...req.body },
		});
		res.status(201).json({ msg: "Channel updated succesfully" + channel.id });
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
	}
	res.send(402).json({ msg: "Something went wrong" });
});

app.delete("/channel", async (req, res) => {
	try {
		const channel = await prisma.channel.delete({
			where: { id: req.body.id },
		});
		res.status(201).json({ msg: "Channel deleted succesfully" + channel.id });
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
	}
	res.send(402).json({ msg: "Something went wrong" });
});

app.listen(port);
