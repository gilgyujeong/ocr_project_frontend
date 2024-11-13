import styled from "@emotion/styled";
import { Card } from "antd";

const { Meta } = Card

export const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1200px;
    border-radius: 5px;
    margin: auto;
`

export const Button = styled(Card)`
    width: 350px;
    margin: 20px;
    padding: 0;
`

export const ButtonText = styled(Meta)`
    text-align: center;
    
    .ant-card-meta-title {
        font-size: 25px;
        font-weight: bold;
    }
`