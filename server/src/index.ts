import express from "express";
var { expressjwt: jwt } = require("express-jwt");
const cors = require("cors");
import bodyParser from "body-parser";
const ManagementClient = require("auth0").ManagementClient;

var jwks = require("jwks-rsa");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
var port = 5000;
const authConfig = {
	domain: "dev-5pvvajiehcpn55g6.us.auth0.com",
	audience: "https://vue-express-api.com",
	clientId: "fWx02Uh7TdDFufkOrh3un2U7ymGy2Bxa",
	clientSecret: "T8yEr_5JmGzI-hk3FElKJ63Y4cqF-RWToYXSDCR_YQ8QrKI_2Kk8lsiJj3Pp2BMI",
};
const managementAPI = new ManagementClient({
	domain: authConfig.domain,
	clientId: authConfig.clientId,
	clientSecret: authConfig.clientSecret,
	grant_type: "client_credentials",
});
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
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(jwtCheck);

// campaign buat influencer
app.get("/public/campaign", async (req, res) => {
	const campaigns = await prisma.campaign.findMany();
	res.status(200).json({
		status: "success",
		data: campaigns,
		total: campaigns.length,
	});
});

// campaign buat company
app.get("/campaign", async (req, res) => {
	const { userId, id } = req.query;
	if (id) {
		const campaign = await prisma.campaign.findUnique({
			// @ts-ignore
			where: { id: id },
		});
		res.status(200).json({
			status: "success",
			data: campaign,
		});
		return;
	}
	const campaigns = await prisma.campaign.findMany({
		// @ts-ignore
		where: { userId: userId },
	});

	res.status(200).json({
		status: "success",
		data: campaigns,
		total: campaigns.length,
	});
});

app.post("/campaign", async (req: express.Request, res: express.Response) => {
	try {
		const campaign = await prisma.campaign.create({
			data: { ...req.body },
		});
		res.status(201).json({ status: "success", msg: "Campaign created succesfully " + campaign.id });
		return;
	} catch (e: any) {
		res.status(402).json({ status: "failed", msg: e.message });
		return;
	}
});

app.put("/campaign", async (req, res) => {
	try {
		const campaign = await prisma.campaign.update({
			where: { id: req.body.id },
			data: { ...req.body },
		});
		res.status(201).json({ status: "success", msg: "Campaign updated succesfully " + campaign.id });
		return;
	} catch (e: any) {
		res.status(402).json({ status: "failed", msg: e.message });
		return;
	}
});

app.delete("/campaign", async (req, res) => {
	try {
		const campaign = await prisma.campaign.delete({
			// @ts-ignore
			where: { id: req.query.id },
		});
		const offer = await prisma.offer.deleteMany({
			// @ts-ignore
			where: { campaignId: req.query.id },
		});
		res.status(201).json({ status: "success", msg: "Campaign deleted succesfully " + campaign.id });
		return;
	} catch (e: any) {
		res.status(402).json({ status: "failed", msg: e.message });
		return;
	}
});

// CRUD channel influencer
app.get("/channel", async (req, res) => {
	const { id, cid } = req.query;

	if (cid) {
		const channel = await prisma.channel.findUnique({
			// @ts-ignore
			where: { id: cid },
		});
		res.status(200).json({
			status: "success",
			data: channel,
		});
		return;
	}
	const channels = await prisma.channel.findMany({
		// @ts-ignore
		where: { userId: id },
	});

	res.status(200).json({
		status: "success",
		data: channels,
		total: channels.length,
	});
});

app.post("/channel", async (req, res) => {
	try {
		console.log(req.body);
		const channel = await prisma.channel.create({
			data: { ...req.body },
		});
		res.status(201).json({ status: "success", msg: "Channel created succesfully" + channel.id });
		return;
	} catch (e: any) {
		res.status(402).json({ status: "failed", msg: e.message });
		return;
	}
});

app.put("/channel", async (req, res) => {
	try {
		const channel = await prisma.channel.update({
			where: {
				id: req.body.id,
			},
			data: {
				followers: req.body.followers,
				price: req.body.price,
				type: req.body.type,
				url: req.body.url,
				userId: req.body.userId,
				username: req.body.username,
			},
		});
		res.status(201).json({ status: "success", msg: "Channel updated succesfully " + channel.id });
		return;
	} catch (e: any) {
		res.status(402).json({ status: "failed", msg: e.message });
		return;
	}
});

app.delete("/channel", async (req, res) => {
	try {
		const { cid } = req.query;
		const channel = await prisma.channel.delete({
			// @ts-ignore
			where: { id: cid },
		});
		res.status(201).json({ msg: "Channel deleted succesfully " + channel.id });
		return;
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
		return;
	}
});

// CRUD Offer
app.get("/offer", async (req, res) => {
	try {
		const { userId, id, type } = req.query;
		if (id) {
			const offer = await prisma.offer.findUnique({
				// @ts-ignore
				where: { id: id },
			});
			if (offer) {
				const campaign = await prisma.campaign.findUnique({
					where: {
						id: offer?.campaignId,
					},
				});
				const data = { campaign, offer };
				res.status(200).json({ status: "success", data: data });
				return;
			}
			res.status(404).json({ status: "failed", msg: "Offer not found" });
			return;
		}
		if (type === "influencer") {
			const offers = await prisma.offer.findMany({
				// @ts-ignore
				where: { influencerId: userId },
			});
			const campaigns = await prisma.campaign.findMany({
				// @ts-ignore
				where: {
					id: {
						in: offers.map((offer) => offer.campaignId),
					},
				},
			});
			const data = campaigns.map((item) => {
				const offer = offers.find((offer) => offer.campaignId === item.id);
				return { ...item, offer };
			});
			res.status(200).json({ status: "success", data: data, total: data.length });
			return;
		} else {
			const campaigns = await prisma.campaign.findMany({
				where: {
					// @ts-ignore
					userId: userId,
				},
			});
			const offers = await prisma.offer.findMany({
				// @ts-ignore
				where: {
					campaignId: {
						in: campaigns.map((campaign) => campaign.id),
					},
				},
			});
			const data = offers.map((item) => {
				const campaign = campaigns.find((campaign) => campaign.id === item.campaignId);

				return { ...item, campaign };
			});
			res.status(200).json({ status: "success", data: data, total: data.length });
			return;
		}
	} catch (e: any) {
		res.status(404).json({ status: "failed", msg: e.message });
		return;
	}
});

app.post("/offer", async (req, res) => {
	try {
		// const { campaignId, influencerId } = req.body;
		const offer = await prisma.offer.create({
			data: { ...req.body },
		});
		res.status(201).json({ status: "success", msg: "Offer created succesfully" + offer.id });
		return;
	} catch (e: any) {
		res.status(402).json({ status: "failed", msg: e.message });
		return;
	}
});

app.put("/offer", async (req, res) => {
	try {
		const offer = await prisma.offer.update({
			where: {
				// @ts-ignore
				id: req.query.id,
			},
			data: {
				status: req.body.status,
			},
		});
		res.status(201).json({ status: "success", msg: "Offer updated succesfully " + offer.id });
		return;
	} catch (e: any) {
		res.status(402).json({ status: "failed", msg: e.message });
		return;
	}
});

app.delete("/offer", async (req, res) => {
	try {
		const { id } = req.query;
		const offer = await prisma.offer.delete({
			// @ts-ignore
			where: { id: id },
		});
		res.status(201).json({ msg: "Offer deleted succesfully " + offer.id });
		return;
	} catch (e: any) {
		res.status(402).json({ msg: e.message });
		return;
	}
});

app.listen(port);
