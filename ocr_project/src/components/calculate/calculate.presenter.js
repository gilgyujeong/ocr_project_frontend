import moment from 'moment';
import * as S from './calculate.styles'

export default function CalculatePresenter(props) {
    return (
        <S.MainBox>
            <S.CalculateForm onSubmit={props.calculateHandleSubmit}>
                <S.InputBox>
                    <S.Label>차량 번호 :</S.Label>
                    <S.InputWrite onChange={props.onChangeCarNum} placeholder='차량번호 뒷자리 4자리를 입력해주세요' />
                    <S.InputButton type='submit'>입력</S.InputButton>
                </S.InputBox>
            </S.CalculateForm>
                {props.responseData && 
                    props.responseData.map((el, index) => {
                        return(
                            <S.CarInfo key={index}>
                                <S.CarInfoImage src={`/upload/${el.imageName}`} />
                                <S.CarInfoImage src={`/upload/detection_img/${el.imageName}`} />
                                <S.CarInfoBox>
                                    <S.CarInfoContent>입차 시간 : {moment(el.createdAt).format('YYYY-MM-DD HH:mm:ss')}</S.CarInfoContent>
                                    <S.CarInfoContent>현재 시간 : {moment().format('YYYY-MM-DD HH:mm:ss')}</S.CarInfoContent>
                                    <S.CarInfoContent>경과 시간 : {moment().diff(moment(el.createdAt), 'minutes')}분</S.CarInfoContent>
                                    <S.CarInfoContent>예상 금액 : {Math.ceil(moment().diff(moment(el.createdAt), 'minutes') / 30) * 500}원 </S.CarInfoContent>
                                </S.CarInfoBox>
                                <S.InputButton type='button' onClick={props.onClickCalculate(index)}>정산</S.InputButton>
                            </S.CarInfo>
                        )
                    })
                }
        </S.MainBox>
    )
}