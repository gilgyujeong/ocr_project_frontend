import axios from "axios";
import CalculatePresenter from "./calculate.presenter";
import { useState } from "react";

export default function CalculateContainer() {
    const [carNum, setCarNum] = useState('');
    const [responseData, setResponseData] = useState([]);

    const onChangeCarNum = (event) => {
        setCarNum(event.target.value);
    }

    const calculateHandleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post("http://localhost:8081/find", {
                carNumber: carNum,
                
            })
            console.log(response.data.data)
            setResponseData(response.data.data)
        } catch(error) {
            console.error(error)
        }
    }

    const onClickCalculate = (index) => async (event) => {
        console.log(responseData[index].imageId)
        try {
            const response = await axios.put(`http://localhost:8081/calculate/${responseData[index].imageId}`)
            console.log(response)
            alert(`차량번호 ${responseData[index].carNumber} 차량의 주차정산이 완료 되었습니다.`);
            window.location.reload();
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <CalculatePresenter 
            calculateHandleSubmit={calculateHandleSubmit}
            carNum={carNum}
            onChangeCarNum={onChangeCarNum}
            responseData={responseData}
            onClickCalculate={onClickCalculate}
        />
    )
}