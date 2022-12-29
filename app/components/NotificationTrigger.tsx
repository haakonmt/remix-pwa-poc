import { sendNotification } from "~/utils/client/pwa-utils.client";

const texts = [
  "hei",
  "hallo",
  "hello",
  "bonjour",
  "guten tag",
  "bungiorno",
  "ciao",
];

export const NotificationTrigger = () => {
  return (
    <button
      style={{ display: "block" }}
      onClick={() => {
        void sendNotification(texts[Math.floor(Math.random() * texts.length)], {
          body: texts[Math.floor(Math.random() * texts.length)],
          silent: false,
        });
      }}
    >
      Trigger notification
    </button>
  );
};
