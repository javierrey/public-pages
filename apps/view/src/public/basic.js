// basic.js
// @ts-nocheck
/** @param {string} id */
export const ge = (id) => document.getElementById(id);
/** @param {string} sel */
export const qs = (sel, par = document) => par.querySelector(sel);
/** @param {string} sel */
export const qa = (sel, par = document) => par.querySelectorAll(sel);
