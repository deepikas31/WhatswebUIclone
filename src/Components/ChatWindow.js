import React from "react";
import styled from "styled-components";

function ChatWindow() {
  return (
    <Container>
      {/* header */}
      <ChatHeader>
        <ChatHeaderLeft>
          <Profile>
            {" "}
            <img src="./images/UserProfile.jpg" alt="" />
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
      {/* body */}
      <ChatBody></ChatBody>
      {/* footer */}
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
//header
const Container = styled.div`
  width: 65%;
  height: 650px;
  display: flex;
  flex-direction: column;
  position: fixed;

  z-index: -1;
`;
const ChatHeader = styled.div`
  background: rgb(237, 237, 237);
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 16px 32px;
`;

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

//body
const ChatBody = styled.div``;
//FOOTER
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
    font-size: 1.5rem;
  }
`;
const MessageBarRight = styled.div`
  margin-right: 3rem;
`;

export default ChatWindow;
