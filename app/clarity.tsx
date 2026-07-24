"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    Clarity.init("xrm7v8uhsg");
  }, []);

  return null;
}