import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const savePlayerMobileUpdate = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      SouthAfricanIdnumber: z.string().regex(/^\d{13}$/),
      oldMobileNumber: z.string().regex(/^\d{10}$/),
      newMobileNumber: z.string().regex(/^\d{10}$/),
    }),
  )
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const secret = process.env.SUPABASE_SECRET_KEY;

    if (!url || !secret) {
      throw new Error("Database configuration is missing.");
    }

    const supabase = createClient(url, secret, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase
      .from("player_mobile_updates")
      .insert({
        South_African_ID_number: data.SouthAfricanIdnumber,
        old_mobile_number: data.oldMobileNumber,
        new_mobile_number: data.newMobileNumber,
      });

    if (error) {
      console.error(error);
      throw new Error("Unable to save the request.");
    }

    return { success: true };
  });
