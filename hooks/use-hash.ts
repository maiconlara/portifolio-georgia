"use client";

import { useSyncExternalStore } from "react";

/** Fired by `setHash`, since `history.replaceState` does not fire `hashchange`. */
const HASH_EVENT = "ge:hash";

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener(HASH_EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener(HASH_EVENT, onChange);
  };
}

function getHash(): string {
  return decodeURIComponent(window.location.hash.slice(1));
}

function getServerHash(): string {
  return "";
}

/**
 * Current address hash without the "#", e.g. "serie-margaridas" for
 * `/trabalhos/#serie-margaridas`. Empty on the server.
 */
export function useHash(): string {
  return useSyncExternalStore(subscribeToHash, getHash, getServerHash);
}

/**
 * Replaces the address hash without adding a history entry. The Next router
 * state is kept, so the back button still works.
 *
 * @param value - New hash without "#". Empty removes it.
 */
export function setHash(value: string): void {
  const { pathname, search } = window.location;
  const url = value ? `${pathname}${search}#${encodeURIComponent(value)}` : `${pathname}${search}`;
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new Event(HASH_EVENT));
}
