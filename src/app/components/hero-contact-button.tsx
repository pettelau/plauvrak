"use client";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

export const HeroContactButton = () => {
  return (
    <Button size="lg">
      <a href="#contact-section">
        <SendHorizonal />
        Kontakt meg
      </a>
    </Button>
  );
};
