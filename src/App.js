// import logo from './logo.svg';
import "./App.css";
import Body from "./Components/Body";
import styled from "styled-components"
function App() {
  return (
    <TotalBody>
      <Body />
    </TotalBody>
  );
}

const TotalBody = styled.div`
  overflow: hidden;
  height:100%;
`;

export default App;
