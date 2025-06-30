'use client';

import { useState } from "react";
import FreeTrialPopup from "./FreeTrialPopup";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {children}
      <FreeTrialPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </>
  );
}
