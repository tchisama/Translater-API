import React , { useEffect, useState } from 'react'
import styled from 'styled-components'
import longs from '../data/longs'
import langs from "../data/longs"
import { HiOutlineSwitchHorizontal } from "react-icons/hi";


function Controlers({outlang,inlang,setInlang,setOutlang,setInput,setOutput,translate,output,input}) {

    function switchlang() {
        const longs= [outlang,inlang]
        setInlang(pre=>longs[0])
        setOutlang(pre=>longs[1])
        setInput(pre=>output)
        setOutput(pre=>input)
    }
    return (
        <Bar>
            <Select name='inputLang' onChange={(e)=>setInlang(e.target.value)} value={inlang}>
                {longs.map((long,key)=>{
                    return(
                        <option key={key}>{long.name}</option>
                    )
                })}
            </Select>

            <Switch onClick={switchlang}><HiOutlineSwitchHorizontal/></Switch>
            
            <Select name='inputLang' onChange={(e)=>setOutlang(e.target.value)} value={outlang}>
                {longs.map((long,key)=>{
                    return(
                        <option key={key}>{long.name}</option>
                    )
                })}
            </Select>
        </Bar>
    )
}

const Bar = styled.nav`
    width:100%;
    height:50px;
    display: flex;
    margin-bottom:5px;
`
const Select = styled.select `
    width:calc(50% - 30px);
    padding:0 15px ;
    border-radius:5px;
    border:1px solid #3333;
    outline:none;
    font-size:20px;
    color: #545E75;
    option{
        height:40px;
        padding:10px;
    }
`
const Switch = styled.button`
    width:60px;
    font-size:25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #fff;
    cursor: pointer;
    color: #545E75;
`
export default Controlers