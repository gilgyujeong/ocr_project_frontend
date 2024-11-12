import styled from "@emotion/styled";

export const PageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    margin: auto;
    border: 1px solid black;
`

export const ImageBox = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 5px;
`

export const Image = styled.img`
    width: 400px;
    height: 400px;
    object-fit: contain;
    border-radius: 5px;
`

export const InputButton = styled.input`
    display: none;
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const ImageInput = styled.label`
    display: flex;
    width: 120px;
    height: 35px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #534ae6;
    border: 2px solid #534ae6;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 20px;
    cursor: pointer;
`

export const SubmitButton = styled.button`
    display: flex;
    width: 120px;
    height: 35px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #534ae6;
    border: 2px solid #534ae6;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
`