import * as S from './upload.styles'

export default function UploadPresenter(props) {
    return (
        
        <S.PageBox>
            <form onSubmit={props.handleSubmit}>
                    {<S.Image>props.imageUrl</S.Image>&& (
                        <S.ImageBox >
                            <S.Image src={props.imageUrl} />
                        </S.ImageBox>
                    )}
                
                <S.ButtonBox>
                    <S.InputButton type="file" onChange={props.handleFileChange} id='imageInput' />
                    <S.ImageInput for="imageInput">파일 선택</S.ImageInput>
                    <S.SubmitButton type="submit">업로드</S.SubmitButton>
                </S.ButtonBox>
            </form>
        </S.PageBox>
        
    )
}