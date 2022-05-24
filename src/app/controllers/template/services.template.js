// @ts-check
"use strict";

const { Logger } = require("../../utils");
const logger = new Logger();

const Queries = require("../../DbInterface/mySql/queries/queries.template");
const query = new Queries();

const HttpExpection = require("../../errors/HttpExpection");

/**
 * @typedef {import('./Interfaces.template.js').IGetValidatorInputReturn} IGetValidatorInputReturn
 * @typedef {import('./Interfaces.template.js').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 * @typedef {import('./Interfaces.template.js').IPostValidatorInputReturn} IPostValidatorInputReturn
 * @typedef {import('./Interfaces.template.js').IPutValidatorInputReturn} IPutValidatorInputReturn
 */

/**
 * @class
 * @classdesc Template Create The Class
 */
module.exports = class TemplateServices {
	/**
	 * get by id params template servide
	 * @param {IGetByIdParamsValidatorInputReturn} payload
	 * @returns {Promise<{success: boolean}>}
	 */
	async deleteTemplateService(payload) {
		const trace = logger.startTrace(new Error(), +payload.trace);
		const isIdExisted = await query.getByIdQueryTemplate(
			+payload.trace,
			payload.id
		);

		if (!isIdExisted || Object.keys(isIdExisted).length === 0) {
			throw new HttpExpection(404, { message: "Data not Found!" });
		}
		const result = await query.deleteQueryTemplate(
			+payload.trace,
			payload.id
		);
		logger.endTrace(trace, +payload.trace);
		return { success: true };
	}
};
