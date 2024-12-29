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
        <h3>How Falcon-7B-Instruct Works</h3>
        <p>
          Falcon-7B-Instruct is a large language model (LLM) that falls under the category of instruction-tuned models. 
          These models, like Falcon-7B-Instruct, are designed to generate more human-aligned responses when given clear and specific instructions. 
          The Falcon-7B-Instruct is built upon the transformer architecture, a foundational model for most contemporary LLMs, and trained on instruction-following tasks to refine its ability to respond effectively to prompts.
        </p>
        <p>
          The mathematical theory behind Falcon-7B-Instruct is rooted in the transformer architecture, particularly the attention mechanism that underpins its operation. 
          Transformers leverage self-attention to process sequences of data (such as text) efficiently. In mathematical terms, self-attention computes a weighted sum of all input elements based on their relevance to each other, allowing the model to capture relationships between distant words in a sentence.
        </p>
        <p>
          The core operation in the transformer is described by the following equation for the attention mechanism:
        </p>
        <pre>
          Attention(Q, K, V) = softmax((QK^T) / sqrt(d_k)) V
        </pre>
        <p>
          Here: 
          Q (Query), K (Key), and V (Value) are matrices derived from the input data. 
          d_k is the dimension of the key vectors, serving as a scaling factor to prevent large values in the softmax. 
          The attention scores are computed by taking the dot product of the query and key matrices, which is then normalized via the softmax function. 
          These scores are used to weight the values, enabling the model to focus on relevant parts of the input sequence.
        </p>
        <p>
          Falcon-7B-Instruct's fine-tuning process allows the model to interpret prompts as instructions, enabling it to generate more relevant and context-aware responses. This instruction-following capability can be modeled as the model's ability to adjust its attention mechanisms based on the type of query and previous training, influencing the likelihood of selecting certain tokens over others during generation.
        </p>
        <p>
          Compared to GPT and Gemini models, Falcon-7B-Instruct differs primarily in its specialized instruction-following training. While GPT models are trained for general language generation and Gemini models are multi-modal, Falcon-7B-Instruct is uniquely tailored for interactive and conversational tasks.
        </p>
        <p>
          In conclusion, Falcon-7B-Instruct's fine-tuning and instruction-following focus represent a significant leap in making LLMs more human-like in interactive, conversational settings.
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
