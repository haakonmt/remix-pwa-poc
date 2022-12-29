import {
  enableFullScreenMode,
  exitFullscreenMode,
} from "~/utils/client/pwa-utils.client";

export const FullscreenToggler = () => {
  return (
    <button
      onClick={() => {
        const toggler = document.fullscreenElement
          ? exitFullscreenMode
          : enableFullScreenMode;
        return toggler();
      }}
    >
      Toggle full screen
    </button>
  );
};
