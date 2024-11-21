import styled from "styled-components";
// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import {FlexMixin } from "./style/styled";


//section
const ContentsContainer = styled.section`
  ${FlexMixin({ justify: "center", align: "center", wrap: "wrap", gap: 20 })}
  padding: 20px 40px;
`

function App() {
  return (
    <main>
      <Header />
      <ContentsContainer>
      
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
        </ContentsContainer>
   
    </main>
  );
}

export default App;
