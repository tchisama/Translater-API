import React from 'react'
import styled from 'styled-components';
import { HiArrowSmRight } from "react-icons/hi";
import { HiDuplicate } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { HiVolumeUp } from "react-icons/hi";

import copy from "copy-to-clipboard";
import {useSpeechSynthesis} from 'react-speech-kit';
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";


function Viewer({input,output,setInput,setOutput,translate}) {
    const {speak}=useSpeechSynthesis();
    const {
        transscript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    }= useSpeechRecognition()
    const handelMic = ()=>{
        if(listening){ 
            resetTranscript()
            SpeechRecognition.stopListening()
        }else{
            SpeechRecognition.startListening()

        }
    }
    return (
    <View>
        <Input placeholder='Enter your text' value={input} onInput={(e)=>{setInput(e.target.value)}} autoFocus autoCorrect='false'></Input>
        <HiOutlineX onClick={()=>{setInput('');setOutput('')}} style={(input.length!=0)?{display:'block',fontSize:"20px"}:{fontSize:"0px",display:"none"}} className='HiOutlineX'/>
        <HiArrowSmRight onClick={translate} style={(input.length!=0)?{display:'block',fontSize:"30px"}:{fontSize:"0px",display:"none"}} className='HiArrowSmRight'/>
        <HiDuplicate onClick={()=>{copy(output)}} style={(output.length!=0)?{display:'block',fontSize:"20px"}:{fontSize:"0px",display:"none"}} className='HiDuplicate'/>
        <HiVolumeUp onClick={()=>speak({text:output})} style={{display:'block',fontSize:"20px"}} className='HiVolumeUp'/>
        <HiVolumeUp onClick={()=>speak({text:input})} style={{display:'block',fontSize:"20px"}} className='HiVolumeUp2'/>
        <Output>{output}</Output>
    </View>
  )
}

const View = styled.main`
    width:100%;
    display: flex;
    min-height:300px;
    gap:2px;
    position: relative;
    padding-bottom:50px;
    .HiArrowSmRight,.HiDuplicate,.HiOutlineX{
        position: absolute;
        left:50%;
        top:100%;
        padding: .8rem;
        border-radius: 50%;
        color:#fff;
        transition: .3s cubic-bezier(0.165, 0.84, 0.44, 1);
        cursor: pointer;
        border:5px solid #fff;
    }
    .HiArrowSmRight{
        transform: translate(-50%,-50%);
        background-color: #6874E8;
        font-size: 2rem;
        &:hover {
            transform:translate(-50%,-50%) scale(1.1) ;
        }
    }
    .HiOutlineX{
        transform: translate(-200%,-50%);
        font-size: 1rem;
        background-color: #FF5F7E;
        &:hover {
            transform:translate(-200%,-50%) scale(1.1) ;
        }
    }
    .HiDuplicate{
        transform: translate(100%,-50%);
        font-size: 1rem;
        background-color: #FFAB4C;
        &:hover {
            transform:translate(100%,-50%) scale(1.1) ;
        }
    }
    .HiVolumeUp{
        position: absolute;
        right: 10px;
        bottom: 60px;
        background-color: #6874E8;
        color: #fff;
        padding: 0.3rem;
        border-radius: 1rem;
        cursor: pointer;
    }
    .HiVolumeUp2{
        position: absolute;
        right:calc(50% + 10px);
        bottom: 60px;
        background-color: #6874E8;
        color: #fff;
        padding: 0.3rem;
        border-radius: 1rem;
        cursor: pointer;
    }
    


`
const Input = styled.textarea`
    background-color: #fff;
    width:50%;
    border: 1px solid #3333;
    border-radius: 5px;
    outline: none;
    padding:20px;
    font-size:2rem;
    color:#545E75;
    font-weight:bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    &::placeholder{
        color: #aaa;
    }
    `
const Output = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fff;
    width:50%;
    border: 1px solid #3333;
    border-radius: 5px;
    font-size:25px;
    padding:20px;
    outline: none;
    padding:20px;
    font-size:2rem;
    color:#545E75;
    font-weight:bold;
`

export default Viewer