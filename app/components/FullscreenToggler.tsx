import { useEffect, useState } from "react";

import {
  enableFullScreenMode,
  exitFullscreenMode,
} from "~/utils/client/pwa-utils.client";

export const FullscreenToggler = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      enableFullScreenMode();
    } else {
      exitFullscreenMode();
    }
  }, [isFullscreen]);

  return (
    <button onClick={() => setIsFullscreen((prev) => !prev)}>
      Toggle full screen
    </button>
  );
};
