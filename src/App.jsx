import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <h1>Select</h1>
      <WrapBtn>
        <BtnGroup_1>
          <Btn>
            <div>자바</div>
            <div>▼</div>
          </Btn>
          <List>
            클릭하며 나옴
          </List>
        </BtnGroup_1>
        <BtnGroup_2>
          <Btn>
            <div>자바</div>
            <div>▼</div>
          </Btn>
          <List>
            클릭하며 나옴
          </List>
        </BtnGroup_2>
      </WrapBtn>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 1100px;
  height: 150px;
  border : 2px solid gray;
  margin : 20px;
  background-color: red;
  overflow: visible;
`
const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  height: 62px;
  overflow: visible;
  background-color: green;
`
const BtnGroup_1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  overflow: visible;
  height: fit-content;
`
const BtnGroup_2 = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  /* height: fit-content; */
  overflow: hidden;
`

const List = styled.ul`
  height: 400px;
  border: 1px solid black;
  background-color: white;
`