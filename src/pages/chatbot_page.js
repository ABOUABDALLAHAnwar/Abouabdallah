import React from 'react';
import Chatbot from '../components/home/chatbot/anwar_bot';  // Import the Chatbot component
import MainPageLayout from '../components/MainPageLayout'

const ChatbotPage = () => {
    return (
        <MainPageLayout>
          <div>
            <h2>Anwar bot</h2>
            <Chatbot />  {/* Render the Chatbot */}
        </div>
        </MainPageLayout>        
    );
};

export default ChatbotPage;


