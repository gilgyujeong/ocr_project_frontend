import * as S from './upload.styles'

interface UploadPresenterProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    imageUrl: string;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function UploadPresenter(props: UploadPresenterProps) {
    return (
        <S.PageBox>
            <form onSubmit={props.handleSubmit}>
                    {props.imageUrl ? (
                        <S.ImageBox >
                            <S.Image src={props.imageUrl} />
                        </S.ImageBox>
                    ) : (
                        <S.ImageBox style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>이미지를 입력해주세요</S.ImageBox>
                    )}
                
                <S.ButtonBox>
                    <S.InputButton type="file" onChange={props.handleFileChange} id='imageInput' />
                    <S.ImageInput htmlFor="imageInput">파일 선택</S.ImageInput>
                    <S.SubmitButton type="submit">업로드</S.SubmitButton>
                </S.ButtonBox>
            </form>
        </S.PageBox>
        
    )
}