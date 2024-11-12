import { useRouter } from "next/router";
import MainPagePresenter from "./mainpage.presenter";

export default function MainPageContainer() {

    const router = useRouter();

    const onClickUpload = () => {
        router.push('/upload')
    }

    return (
        <MainPagePresenter 
            onClickUpload={onClickUpload}
        />
    )
}