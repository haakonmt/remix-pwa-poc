import { useEffect, useState } from "react";

import type { ResponseObject } from "~/utils/client/pwa-utils.client";
import { requestWakeLock } from "~/utils/client/pwa-utils.client";

let myWakeLock: null | WakeLockSentinel = null;

export const WakeLockToggler = () => {
  const [data, setData] = useState<ResponseObject | null>(null);

  useEffect(() => {
    return () => {
      void myWakeLock?.release();
    };
  }, []);

  return (
    <div>
      <button
        onClick={async () => {
          if (!myWakeLock) {
            const { wakeLock, ...res } = await requestWakeLock();
            if (wakeLock) {
              myWakeLock = wakeLock;
            }
            setData(res);
          } else {
            await myWakeLock.release();
            myWakeLock = null;
            setData(null);
          }
        }}
      >
        Toggle wake lock
      </button>
      {myWakeLock && <div>Wake lock enabled</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
