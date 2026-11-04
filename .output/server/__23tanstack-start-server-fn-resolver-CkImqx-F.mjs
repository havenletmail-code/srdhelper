//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CkImqx-F.js
var manifest = { "f23766d4c798a9ff26928c2f12a8eac0707d0a003950016e07d4237e97ef67f4": {
	functionName: "savePlayerMobileUpdate_createServerFn_handler",
	importer: () => import("./_ssr/player-mobile-update-BaLeLamn.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
