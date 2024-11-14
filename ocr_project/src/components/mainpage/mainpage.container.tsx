import { useRouter } from "next/router";
import MainPagePresenter from "./mainpage.presenter";

export default function MainPageContainer() {

    const router = useRouter();

    const onClickUpload = (): void => {
        router.push('/upload')
    }

    const onClickCalculate = (): void => {
        router.push('/calculate')
    }

    return (
        <MainPagePresenter 
            onClickUpload={onClickUpload}
            onClickCalculate={onClickCalculate}
        />
    )
}