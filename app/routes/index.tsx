import { FullscreenToggler } from "~/components/FullscreenToggler";
import { WakeLockToggler } from "~/components/WakeLockToggler";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <FullscreenToggler />
      <WakeLockToggler />
    </div>
  );
}
