import Cookies from "js-cookie";
import { SetGuestId } from "./cookiesManager";

const GUEST_ID = "u_id";

export const getGuestId = (): string => {
  let guestId: string | null = null;

  guestId = localStorage.getItem(GUEST_ID);

  if (!guestId) {
    guestId = Cookies.get(GUEST_ID) || null;
  }

  //  Create new if not found
  if (!guestId) {
    guestId = crypto.randomUUID();
  }

  localStorage.setItem(GUEST_ID, guestId);
  SetGuestId(guestId);
  return guestId;
};
