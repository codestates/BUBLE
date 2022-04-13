<<<<<<< HEAD
import Footer from "./components/Footer";
import Header from "./components/Header"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;


//style={{ maxWidth: "100%" }}
=======
import Loding from './component/Loding'
import styled from "styled-component"

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const IS = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default function App() {
  return (
    <div className="App">
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <IS>Tomato</IS>
    </div>
  )}
>>>>>>> 47e1f4d (test)
