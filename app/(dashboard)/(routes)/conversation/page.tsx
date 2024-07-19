import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import React from "react";

const Conversation = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="our most advanced conversation"
        icon={MessageSquare}
        iconColor="text-voilet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default Conversation;
