import Styled from "styled-components";
import { Middle, SideMenu, Right } from "./components";
export default function App() {
  return (
    <Container>
      <SideMenu />
      <Middle />
      <Right/>
    </Container>
  );
}
const Container = Styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 0.7fr 2fr 1fr;
`;
