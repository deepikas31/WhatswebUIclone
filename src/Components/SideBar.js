import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <Container>
      <TopMenu>
        <Profile>
          <img src="./images/UserProfile.jpg" alt="" />
        </Profile>
        <Menu>
          <img src="./images/status-icon.svg" alt="" />
          <img src="./images/newchat-icon.svg" alt="" />
          <img src="./images/menu-icon.svg" alt="" />
        </Menu>
      </TopMenu>
      <SearchIcon>
        <div class="SearchBar">
          <img src="./images/Search-icon.svg" alt="" />
          <input type="text" name="" placeholder="Search or start new chat" />
        </div>
      </SearchIcon>
      <ContactList>
        <Scroll>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img1.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">12:51</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <span class="chat-message-typing">User is typing... </span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="unread-messages-number">3</span>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img2.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">Group</span>
                  <span class="chat-date">10:55</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <span class="chat-message-group">User:??? </span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img3.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">Yesterday</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <span class="chat-message">😊 </span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img4.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">Wednesday</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <span class="chat-message">What's up!!</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>

          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img5.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">Monday</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <img
                      class="image-icon"
                      src="images/camera-icon.svg"
                      alt=""
                    />
                    <span class="chat-message">Image</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>

          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/Profile6.jpeg" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">15/7/2021</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <img
                      class="microphone-icon"
                      src="images/microphone-seen.svg"
                      alt=""
                    />
                    <span class="chat-message">1:24</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img3.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">10/7/2021</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <span class="chat-message">Thanks!!!</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img5.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">5/7/2021</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <span class="chat-message">Good😄!!!</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img4.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">4/7/2021</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <span class="chat-message">super!!!</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img5.png" alt="" />
              </UserProfile>
              <ChatRight>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">4/7/2021</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="double-check-mark"
                      src="images/double-check-seen.svg"
                      alt=""
                    />
                    <span class="chat-message">Great!!!</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
          <Contact>
            <NavLink to="chats">
              <UserProfile>
                <img src="./images/img2.png" alt="" />
              </UserProfile>
              <ChatRight style={{ borderBottom: "none" }}>
                <RightTop>
                  <span class="contact-name">User</span>
                  <span class="chat-date">5/7/2021</span>
                </RightTop>
                <RightBottom>
                  <BottomLeft>
                    <img
                      class="single-check-mark"
                      src="images/single-check.svg"
                      alt=""
                    />
                    <span class="chat-message">Are you there???</span>
                  </BottomLeft>
                  <BottomRight>
                    <span class="chat-options">
                      <img src="images/down-arrow.svg" alt="" />
                    </span>
                  </BottomRight>
                </RightBottom>
              </ChatRight>
            </NavLink>
          </Contact>
        </Scroll>
      </ContactList>
    </Container>
  );
}
// TopMenu style starts
const Container = styled.div`
  width: 35%;
  border-right: 1px solid rgb(229, 229, 230);
  @media (max-width: 768px) {
    width: 100%;
    overflow: scroll;
  }
`;
const TopMenu = styled.nav`
  background: rgb(237, 237, 237);
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 10px 32px;
`;

const Profile = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  cursor: pointer;

  img:nth-child(2) {
    margin: 0 50px;
  }
`;
// TopMenu style end
// SearchIcon style starts
const SearchIcon = styled.nav`
  background-color: rgb(246, 246, 246);
  border-bottom: 1px solid rgb(229, 229, 230);
  .SearchBar {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ededed;
  }
  img {
    width: 30px;
    background: #ffffff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding-left: 15px;
  }
  input {
    outline: none;
    border: none;
    padding: 15px 15px 15px 16px;
    flex: 1;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;
// SearchIcon style ends
const ContactList = styled.div`
  height: 100%;
`;
const Scroll = styled.div`
  height: 60%;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 1px;
    border: 5px solid #fff;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const Contact = styled.div`
  /* display: flex;
  align-items: center;
  background: #ffffff;;
  padding: 0.5rem 0 0 1rem;
  cursor: pointer; */
  :hover {
    background: #f5f5f5;
  }
  :hover .chat-options {
    display: initial;
  }
  a {
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 0.5rem 0 0 1rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
`;

const UserProfile = styled.div`
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;

const ChatRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ededed;
`;
const RightTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  .contact-name {
    font-size: 1.2rem;
  }
  .chat-date {
    font-size: 1rem;
    color: #919191;
  }
`;
const RightBottom = styled.div`
  display: flex;
`;
const BottomLeft = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  .chat-message,
  .chat-message-typing,
  .chat-message-group {
    font-size: 1rem;
  }
  .chat-message-typing {
    color: #3ccc2f;
    font-weight: 500;
  }
  .chat-message-group {
    font-weight: 500;
    color: inherit;
  }
  .chat-message,
  .chat-message-group {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 28rem;
  }
  .single-check-mark,
  .double-check-mark {
    margin-right: 0.2rem;
  }

  .single-check-mark {
    width: 1rem;
  }

  .double-check-mark {
    width: 1.4rem;
  }

  .image-icon,
  .microphone-icon {
    margin-right: 0.3rem;
  }
`;
const BottomRight = styled.div`
  display: flex;
  align-items: center;
  .unread-messages-number {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background: #3ccc2f;
    color: #ffffff;
    font-weight: 500;
    border-radius: 50%;
    text-align: center;
    line-height: 2rem;
  }
  .chat-options {
    display: none;
    margin-left: 0.5rem;
  }

  .chat-options img {
    vertical-align: middle;
  }
`;

export default SideBar;
