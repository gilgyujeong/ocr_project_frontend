import styled from "@emotion/styled";
import { Button, Checkbox, Input } from "antd";

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
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
    width: 80px;
    height: 30px;
    border: 2px solid #534ae6;
    border-radius: 5px;
    background-color: white;
    font-size: 16px;
    cursor: pointer;
`

export const CarInfo = styled.div`
    display: flex;
    flex: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-top: 10px;
`
export const CarInfoImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin-right: 10px;
`

export const CarInfoBox = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px;
    margin-right: 10px;
`

export const CarInfoContent = styled.div`
    font-size: 20px;
    margin-bottom: 8px;
`

export const CarInfoCheckBox = styled(Checkbox)`
    margin-right: 30px;
    
    .ant-checkbox-inner {
        width: 20px;
        height: 20px;
    }   
`