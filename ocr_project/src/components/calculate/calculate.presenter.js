import { Button } from 'antd'
import * as S from './calculate.styles'

export default function CalculatePresenter(props) {
    return (
        <S.MainBox>
            <S.CalculateForm onSubmit={props}>
                <S.InputBox>
                    <S.Label>차량 번호 :</S.Label>
                    <S.InputWrite placeholder='차량번호를 입력해주세요' />
                    <S.InputButton type='submit'>입력</S.InputButton>
                </S.InputBox>
            </S.CalculateForm>
        </S.MainBox>
    )
}