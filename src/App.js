import { styled } from 'styled-components'
import axios from 'axios'
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const [trans, setTrans] = useState();
  const URI = process.env.REACT_APP_BASEURL;

  const translate = async () => {
    try {
      const result = await axios.get(`${URI}/translate`,
        {
          params: {
            text: text
          }
        }
      );
      setTrans(result.data.message.result.translatedText);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Main>
        {trans}
      </Main>
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={translate}>
        눌러
      </button>
    </>

  );
}

export default App;

const Main = styled.div`
  font-size: 100px;
`;