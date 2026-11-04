import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/player-mobile-update-BaLeLamn.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var savePlayerMobileUpdate_createServerFn_handler = createServerRpc({
	id: "f23766d4c798a9ff26928c2f12a8eac0707d0a003950016e07d4237e97ef67f4",
	name: "savePlayerMobileUpdate",
	filename: "src/lib/player-mobile-update.ts"
}, (opts) => savePlayerMobileUpdate.__executeServer(opts));
var savePlayerMobileUpdate = createServerFn({ method: "POST" }).inputValidator(objectType({
	SouthAfricanIdnumber: stringType().regex(/^\d{13}$/),
	oldMobileNumber: stringType().regex(/^\d{10}$/),
	newMobileNumber: stringType().regex(/^\d{10}$/)
})).handler(savePlayerMobileUpdate_createServerFn_handler, async ({ data }) => {
	const url = processModule.env.SUPABASE_URL;
	const secret = processModule.env.SUPABASE_SECRET_KEY;
	if (!url || !secret) throw new Error("Database configuration is missing.");
	const { error } = await createClient(url, secret, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} }).from("player_mobile_updates").insert({
		South_African_ID_number: data.SouthAfricanIdnumber,
		old_mobile_number: data.oldMobileNumber,
		new_mobile_number: data.newMobileNumber
	});
	if (error) {
		console.error(error);
		throw new Error("Unable to save the request.");
	}
	return { success: true };
});
//#endregion
export { savePlayerMobileUpdate_createServerFn_handler };
