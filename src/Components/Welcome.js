import React from "react";
import styled from "styled-components";

function Welcome() {
  return (
    <Container>
      <Intro>
        <Image>
          <img src="./images/intro-whatsapp.jpg" alt="" />
        </Image>
        <Text>
          <h1>Keep your phone conntected</h1>
          <span>
            WhatsApp connects to your phone to sync messages. To reduce data
            usage, connect your phone to Wi-Fi.
          </span>
          <br />
          <br />
          <br />
          <Line>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 18"
                width="21"
                height="18"
              >
                <path
                  fill="currentColor"
                  d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 
                 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"
                ></path>
              </svg>
            </span>
            <span>WhatsApp is avaible for windows. </span>
            <a href="https://www.whatsapp.com/download">Get it here</a>
          </Line>
        </Text>
      </Intro>
    </Container>
  );
}
const Container = styled.div`
  width: 65%;
  height: fit-content;
  padding-bottom: 2%;
  border-bottom: 6px solid #4adf83;
`;
const Intro = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  flex-direction: column;
`;
const Image = styled.div`
  img {
    width: 15rem;
    border-radius: 50%;
  }
`;
const Text = styled.div`
  text-align: center;
  width: 55%;
  margin-bottom: 3%;
  span {
    color: #919191;

    font-weight: 50;
  }
  h1 {
    color: grey;
    font-weight: 300;
  }
`;
const Line = styled.div`
  border-top: 1px solid rgb(209, 229, 200);
  padding: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: 50;

  span {
    color: #919191;
  }
  a {
    color: rgb(43, 177, 94);
    text-decoration: none;
  }
`;

export default Welcome;
