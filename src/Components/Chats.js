import React from "react";
import styled from "styled-components";
function Chats() {
  return (
    <Container>
      {/* HEADER */}
      <ChatHeader>
        <ChatHeaderLeft>
          <Profile>
            {" "}
            <img src="./images/img3.png" alt="" />
          </Profile>
          <ContactName>
            <span>User</span>
          </ContactName>
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <Menu>
            <img src="./images/Search-icon.svg" alt="" />
            <img src="./images/menu-icon.svg" alt="" />
          </Menu>
        </ChatHeaderRight>
      </ChatHeader>
      {/* CHATBODY */}
      <Scroll>
        <Sender>
          <span class="sender-message">Hey! How's it going??</span>
          <span class="message-time">7.34</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
        <Receiver>
          <span class="receiver-message">I'm doing fine! What about you??</span>
          <span class="message-time">7:35</span>
        </Receiver>
        <Sender>
          <span class="sender-message">I'm good😄</span>
          <span class="message-time">7:36</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
        <Receiver>
          <span class="receiver-message"> What have you been up to?</span>
          <span class="message-time">7:37</span>
        </Receiver>
        <Sender>
          <span class="sender-message"> Working a lot😪</span>
          <span class="message-time">7:40</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
        <Receiver>
          <span class="receiver-message"> That sounds hard😯</span>
          <span class="message-time">7:42</span>
        </Receiver>
        <Receiver>
          <span class="receiver-message"> How’s the family?</span>
          <span class="message-time">7:42</span>
        </Receiver>
        <Sender>
          <span class="sender-message">Everyone is good</span>
          <span class="message-time">7:45</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
        <Receiver>
          <span class="receiver-message"> Are you free this weekend?</span>
          <span class="message-time">7:46</span>
        </Receiver>
        <Sender>
          <span class="sender-message">I think so, why?</span>
          <span class="message-time">7:47</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
        <Receiver>
          <span class="receiver-message"> Want to see a movie?😅</span>
          <span class="message-time">7:48</span>
        </Receiver>
        <Sender>
          <span class="receiver-message">Sure</span>
          <span class="message-time">7:50</span>
        </Sender>
        <Receiver>
          <span class="receiver-message">Great!</span>
          <span class="message-time">7:55</span>
        </Receiver>

        <Sender>
          <span class="sender-message"> What time should I be there?</span>
          <span class="message-time">7:52</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
        <Receiver>
          <span class="receiver-message">
            {" "}
            Anytime between 6 and 7 would be fine.
          </span>
          <span class="message-time">7:55</span>
        </Receiver>

        <Sender>
          <span class="sender-message">Ok we'll fix @ 6</span>
          <span class="message-time">7:58</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
        <Receiver>
          <span class="receiver-message">Sure we'll meet @ weekend </span>
          <span class="message-time">8:00</span>
        </Receiver>
        <Sender>
          <span class="sender-message">😊</span>
          <span class="message-time">8:00</span>
          <span class="message-status">
            <img src="./images/double-check-seen.svg" alt="" />
          </span>
        </Sender>
      </Scroll>
      {/* FOOTER */}

      <ChatFooter>
        <MessageBar>
          <MessageBarLeft>
            <img src="images/icons.svg" alt="" />
            <img src="images/attach-icon.svg" alt="" />
          </MessageBarLeft>
          <MessageBarCenter>
            <input type="text" placeholder="Type a message" />
          </MessageBarCenter>
          <MessageBarRight>
            <img src="images/audio-icon.svg" alt="" />
          </MessageBarRight>
        </MessageBar>
      </ChatFooter>
    </Container>
  );
}
const Container = styled.div`
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ChatHeader = styled.div`
  background: rgb(237, 237, 237);
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 10px 32px;
`;
// Header
const ChatHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Profile = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ContactName = styled.div`
  text-align: center;
  padding-left: 1rem;
  padding-top: 0.5rem;
`;
const ChatHeaderRight = styled.div``;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  cursor: pointer;
  margin-top: 8%;
  img:nth-child(1) {
    margin: 0 45px;
  }
`;
{
  /* CHATBODY */
}
const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 50%;
  background: url(./images/bg-chat.png);
  overflow-y: scroll;
  overflow-x: hidden;

  background-repeat: repeat;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaa;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Sender = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
  position: relative;
  background: #dcf8c6;
  align-self: flex-end;
  .sender-message {
    font-size: 1rem;
    margin-right: 1rem;
  }
  .message-time,
  .audio-message-length {
    color: #919191;
    font-size: 0.8rem;
  }

  .message-status img {
    vertical-align: bottom;
  }
`;
const Receiver = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
  position: relative;
  background: #f0f0f0;
  align-self: flex-start;
  .receiver-message {
    font-size: 1rem;
    margin-right: 3rem;
  }

  .message-time,
  .audio-message-length {
    color: #919191;
    font-size: 0.8rem;
  }
`;

/* FOOTER */

const ChatFooter = styled.div``;
const MessageBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background: #f0f0f0;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
`;
const MessageBarLeft = styled.div`
  img:nth-of-type(2) {
    margin: 0 1rem;
  }
`;
const MessageBarCenter = styled.div`
  flex: 1;
  input {
    width: 95%;
    outline: none;
    border: none;
    padding: 1rem 1rem 1rem 1rem;
    flex: 1;
    border-radius: 2rem;
    font-family: "Segoe UI";
    background-color: rgb(255, 255, 255);
  }
  input::-webkit-input-placeholder {
    font-size: 1rem;
  }
`;
const MessageBarRight = styled.div`
  margin-right: 500px;
  @media (max-width: 768px) {
    margin: 0 50px 0 20px;
  }
`;
export default Chats;
