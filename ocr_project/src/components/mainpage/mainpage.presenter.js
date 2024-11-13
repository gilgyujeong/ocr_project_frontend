import * as S from './mainpage.styles'


export default function MainPagePresenter(props) {
    return (
        <S.MainBox>
            <S.Button 
                hoverable 
                cover={<img src='https://img.khan.co.kr/news/2023/03/20/news-p.v1.20230320.d311d45637be4ba0b9ca95bc1f0e01cf_P1.png' style={{objectFit:"cover", height:"400px"}} onClick={props.onClickUpload} />}
            >
                <S.ButtonText title="주차 등록" />
            </S.Button>
            <S.Button 
                hoverable 
                cover={<img src='https://img.khan.co.kr/news/2022/01/25/l_2022012501003100800271061.jpg' style={{objectFit:"cover", height:"400px"}} onClick={props.onClickCalculate} />}
            >
                <S.ButtonText title="주차 정산" />
            </S.Button>
            <S.Button 
                hoverable 
                cover={<img src='https://img.freepik.com/free-photo/vertical-picture-part-grey-car_181624-33069.jpg' style={{objectFit:"cover", height:"400px"}} />}
            >
                <S.ButtonText title="출차" />
            </S.Button>
        </S.MainBox>
    )
}