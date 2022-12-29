import { FullscreenToggler } from "~/components/FullscreenToggler";
import { NotificationTrigger } from "~/components/NotificationTrigger";
import { WakeLockToggler } from "~/components/WakeLockToggler";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <FullscreenToggler />
      <WakeLockToggler />
      <NotificationTrigger />
    </div>
  );
}
