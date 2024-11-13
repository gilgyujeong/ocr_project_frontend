import styled from "@emotion/styled";
import { Input } from "antd";

export const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 1200px;
    height: 400px;
    border: 1px solid black;
    margin: auto;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin: 10px;
`

export const CalculateForm = styled.form`

`

export const InputWrite = styled(Input)`
    width: 300px;
    margin-right: 10px;
`

export const Label = styled.label`
    width: 100px;
    text-align: center;
    font-size: 15px;
    margin-right: 10px;
`

export const InputButton = styled.button`
    color: #534ae6;
    border: 2px solid #534ae6;
    border-radius: 5px;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
`