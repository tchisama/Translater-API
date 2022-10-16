import Controlers from "./components/Controlers";
import Viewer from "./components/Viewer";
import styled from "styled-components";
import {  useState } from "react";
import langs from "./data/longs"

function App() {
  const [inlang, setInlang] = useState("English")
  const [outlang, setOutlang] = useState("Arabic")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const inlangcode = langs.filter(lang => { return lang.name == inlang })[0].codeName;
  const outlangcode = langs.filter(lang => { return lang.name == outlang })[0].codeName;

  async function translate() {  
    if(input){
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '4e3d8fc05bmshb10ff6efee446c9p1280c1jsnf55678c818b3',
          'X-RapidAPI-Host': 'ai-translate.p.rapidapi.com'
        },
        body: `{"texts":["${input}"],"tl":"${outlangcode}","sl":"${inlangcode}"}`
      };
      
      const data =await fetch('https://ai-translate.p.rapidapi.com/translate', options)
        .then(response => response.json())
        .then(response => response.texts)
        .catch(err => console.error(err));
      setOutput(data)

      

    } 
    
  }



  return (
    <Page>
      <Controlers
        inlang={inlang}
        setInlang={setInlang}
        outlang={outlang}
        setOutlang={setOutlang}
        translate={translate}
        setInput={setInput}
        setOutput={setOutput}
        output={output}
        input={input}
      />
      <Viewer
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        translate={translate}
      />
    </Page>
  );
}

const Page = styled.main`
    width:90%;
    max-width:1000px;
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
`
const Header= styled.h1`
    font-size:2rem;
    padding:50px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    color:#6874E8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    .HiTranslate{
      font-size: 4rem;
    }
`

export default App;
