//@ts-check
"use strict";

module.exports = class QueriesMockMysql {
	constructor(host, port, user, password, database) {
		this.host = host;
		this.port = port;
		this.user = user;
		this.password = password;
		this.database = database;
	}

	getAllQueryTemplate(traceIt) {
		traceIt;
		return [
			{
				id: 1,
				title: "Pacific Northwest high-speed rail line",
				content: "Currently there are only a few options for traveling the 140 miles between Seattle and Vancouver and none of them are ideal.",
				author: "Greg",
			},
			{
				id: 2,
				title: "Hitting the beach was voted the best part of life in the region",
				content: "Exploring tracks and trails was second most popular, followed by visiting the shops and then traveling to local parks.",
				author: "Ethan",
			},
			{
				id: 3,
				title: "Machine Learning from scratch",
				content: "Bare bones implementations of some of the foundational models and algorithms.",
				author: "Jo",
			},
		];
	}

	getByIdQueryTemplate(traceIt, id) {
		traceIt;
		if (id > 5) {
			return undefined;
		}

		return {
			id,
			title: "Pacific Northwest high-speed rail line",
			content: "Currently there are only a few options for traveling the 140 miles between Seattle and Vancouver and none of them are ideal.",
			author: "Greg",
		};
	}

	deleteQueryTemplate(traceIt, id) {
		traceIt;
		id;
	}
};
