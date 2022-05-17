// @ts-check
"use strict";

const { Tracer } = require("../../utils");
const tracer = new Tracer();

const Queries = require("./queries.template");
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
	 * get method templateS
	 * @param {IGetValidatorInputReturn} payload
	 * @returns {Promise<*>}
	 */
	async getTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
		const result = await query.getAllQueryTemplate(+payload.trace);
		tracer.endTrace(trace, +payload.trace);
		return result;
	}

	/**
	 * get by id params template servide
	 * @param {IGetByIdParamsValidatorInputReturn} payload
	 * @returns {Promise<*>}
	 */
	async getbyIdParamsTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
		const result = await query.getByIdQueryTemplate(
			+payload.trace,
			payload.id
		);
		tracer.endTrace(trace, +payload.trace);
		return result;
	}

	/**
	 * get by id params template servide
	 * @param {IGetByIdParamsValidatorInputReturn} payload
	 * @returns {Promise<{success: boolean}>}
	 */
	async deleteTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
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
		tracer.endTrace(trace, +payload.trace);
		return { success: true };
	}

	/**
	 * post template service
	 * @param {IPostValidatorInputReturn} payload
	 * @returns {Promise<{success:boolean}>}
	 */
	async postTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
		const result = await query.postQueryTemplate(
			+payload.trace,
			payload.data
		);
		tracer.endTrace(trace, +payload.trace);
		return { success: true };
	}

	/**
	 * put template service
	 * @param {IPutValidatorInputReturn} payload
	 * @returns {Promise<{success:boolean}>}
	 */
	async putTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
		const isIdExisted = await query.getByIdQueryTemplate(
			+payload.trace,
			payload.data.id
		);

		if (!isIdExisted || Object.keys(isIdExisted).length === 0) {
			throw new HttpExpection(404, { message: "Data not Found!" });
		}

		const result = await query.putQueryTemplate(
			+payload.trace,
			payload.data
		);
		tracer.endTrace(trace, +payload.trace);
		return { success: true };
	}
};
