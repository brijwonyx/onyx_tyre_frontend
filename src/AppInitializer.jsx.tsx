import { useEffect, ReactNode } from "react";
import { getGuestId } from "./utils/guest";

type Props = {
  children: ReactNode;
};

const AppInitializer = ({ children }: Props) => {
  useEffect(() => {
    getGuestId();
  }, []);

  return <>{children}</>;
};

export default AppInitializer;
