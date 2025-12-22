import React, { useState } from 'react';
import styled from 'styled-components';

const ChatbotWrapper = styled.div`
  width: 400px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: Arial, sans-serif;
`;

const ChatHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #48C8F0;
  margin-bottom: 15px;
  text-align: center;
`;

const ChatContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: ${props => (props.isUser ? '#48C8F0' : '#f1f1f1')};
  color: ${props => (props.isUser ? '#fff' : '#000')};
  padding: 8px 15px;
  border-radius: 20px;
  margin: 5px 0;
  max-width: 75%;
  word-wrap: break-word;
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;

const TextInput = styled.input`
  flex-grow: 1;
  padding: 8px 15px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #48C8F0;
  }
`;

const SendButton = styled.button`
  padding: 8px 15px;
  background-color: #48C8F0;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #39a8c7;
  }
`;

const ExplanationWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 20px auto;
`;

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello, I m Anwar-Bot, LLm powered chatbot created by Anwar to help you?', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Add logic for chatbot response here
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'This chatbot is currently under maintenance, it will be active soon.', isUser: false }
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {/* Falcon-7B Explanation Section */}
      <ExplanationWrapper>
  <h3>Personal Research Responder</h3>
  <p>
    This project is an LLM powered chatbot based on a Retrieval-Augmented Generation (RAG) system designed to answer questions by leveraging a wide range of personal documents. For this example, I'm using my published articles, my thesis manuscript, and various project documentations. But any researcher could include their own papers. The system combines large language model capabilities with retrieval mechanisms to provide accurate and context-aware responses based on the input documents.
  </p>
  <p>
    The core idea behind the RAG approach is to first retrieve relevant information from the document collection before generating a response. This retrieval step ensures that the language model has access to precise and up-to-date content, improving both relevance and factual correctness.
  </p>
  <p>
    Mathematically, the system relies on vector representations of text (embeddings) and similarity search: each document and query is mapped to a vector space, and the most relevant vectors are retrieved based on cosine similarity or other distance metrics.
  </p>
  <p>
    Once relevant documents are retrieved, they are provided as context to the language model, which generates a response conditioned on both the query and the retrieved information. This allows the model to answer questions accurately while staying grounded in the provided documents.
  </p>
  <p>The process can be broken down into key steps:</p>
  <ul>
    <li>Text extraction: Extract text from documents in LaTeX format using qween3 instruct.</li>
    <li>Document embedding: Transform articles, thesis sections, and project documentation into vector representations (ChromaDB as vectorial database).</li>
    <li>Query embedding: Convert the user's question into a vector in the same space.</li>
    <li>Retrieval: Find the top-3 most relevant document vectors for the query.</li>
    <li>Response generation: Use a LLaMA3 language model to generate answers based on the retrieved context.</li>
  </ul>
  <p>
    This architecture allows the RAG system to adapt dynamically to different types of questions, providing precise and contextually appropriate answers by combining retrieval and generation in a seamless workflow.
  </p>
  <p>
    In conclusion, by integrating personal research, project documentation, and advanced language models, our RAG project transforms static content into an interactive, intelligent assistant capable of answering questions with high accuracy about tensor algebra and graphical models.
  </p>
  <p>
    The project is currently suspended due to cloud costs.
  </p>
</ExplanationWrapper>

      {/* Chatbot Section */}
      <ChatbotWrapper>
        <ChatHeader>Chatbot</ChatHeader>
        <ChatContainer>
          {messages.map((message, index) => (
            <Message key={index} isUser={message.isUser}>
              {message.text}
            </Message>
          ))}
        </ChatContainer>
        <InputWrapper>
          <TextInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
          />
          <SendButton onClick={handleSendMessage}>Send</SendButton>
        </InputWrapper>
      </ChatbotWrapper>
    </div>
  );
};

export default ChatbotPage;
