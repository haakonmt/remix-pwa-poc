/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare global {
  type WakeLockType = "screen";

  type WakeLockEventType = "release";

  interface WakeLockSentinel<T extends WakeLockType = "screen"> {
    readonly released: boolean;
    readonly type: T;

    release(): Promise<void>;

    addEventListener(type: WakeLockEventType, listener: () => void): void;
  }

  interface Navigator {
    wakeLock?: {
      request<T extends WakeLockType>(type: T): Promise<WakeLockSentinel<T>>;
    };

    setAppBadge?(contents?: number): Promise<void>;
    clearAppBadge?(): Promise<void>;
  }
}

export {};
