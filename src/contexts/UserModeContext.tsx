"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type UserMode = "employer" | "jobseeker";

interface UserModeContextType {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
}

const UserModeContext = createContext<UserModeContextType>({
  mode: "employer",
  setMode: () => {},
});

export const UserModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<UserMode>("employer");

  useEffect(() => {
    // sessionStorage resets on every new browser session — always starts as employer
    const stored = sessionStorage.getItem("workeraa_mode") as UserMode;
    if (stored === "employer" || stored === "jobseeker") {
      setModeState(stored);
    }
  }, []);

  const setMode = (newMode: UserMode) => {
    setModeState(newMode);
    sessionStorage.setItem("workeraa_mode", newMode);
  };

  return (
    <UserModeContext.Provider value={{ mode, setMode }}>
      {children}
    </UserModeContext.Provider>
  );
};

export const useUserMode = () => useContext(UserModeContext);