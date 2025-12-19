import { useState } from 'react'
import loadingSpinnerGIF from '/src/assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}) {
        const [inputText, setInputText] = useState('');

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function sendMessageEnter(event){
          if (event.key === 'Enter'){
            sendMessage();
          }
          if (event.key === 'Escape')
            setInputText('');
        }

        async function sendMessage() {

          setInputText('');
          
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
          ];

          setChatMessages([
            ...newChatMessages,
            {
              message: <img src={loadingSpinnerGIF} className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
        }

        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot" 
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={sendMessageEnter}
              className="textBox"
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }