import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import webPush from "web-push";

import { env } from "~/environment.server";
import {
  pushNotification,
  saveSubscription,
} from "~/utils/server/pwa-utils.server";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json();
  const subscription = data.subscription;

  saveSubscription(subscription);

  return { message: "Done" };
};

export const loader: LoaderFunction = async () => {
  if (!env.VAPID_PUBLIC_KEY || !env.VAPID_PRIVATE_KEY) {
    console.log(
      "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
        "environment variables. You can use the following ones:",
    );
    console.log(webPush.generateVAPIDKeys());
    return null;
  }

  return new Response(env.VAPID_PUBLIC_KEY, {
    status: 202,
    statusText: "Successful Operation",
  });
};
