import React from "react";
import ChatBot from "../components/ChatBot";
import Text from "../components/Text";

export const LandingPage = () => {
    return (
        <div className="flex flex-row font-bold">
            <div>Hello There</div>
            <Text />
            <ChatBot />

        </div>
    );
};
