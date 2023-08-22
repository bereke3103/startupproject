import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import {useEffect} from "react";
import {getUserById} from "../../../store/features/userClice";
import {useParams} from "react-router";

const PersonalProfile = () => {
    const params = useParams()
    const userState = useAppSelector(state => state.user.user)
    console.log({userState})
    console.log(params)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUserById(Number(params.id)))
    },[])
    return (
        <div className={"personal__block"}>
            <div className="personal__block-img">
                {/*<div className="img_person">*/}
                {/*    <img src="https://attractivecv.com/wp-content/uploads/2022/01/modele-de-cv-en-anglais-barcelone-bleu-207d-en.jpg" alt=""/>*/}
                {/*</div>*/}
            </div>
                <div className={"person__info"}>
                    <div className="nickname__person">
                        <p>{userState.nickname}</p>
                    </div>
                    <div className="firstname__person">
                        <p>{userState.firstname}</p>
                    </div>
                    <div className="lastname__person">
                        <p>{userState.lastname}</p>
                    </div>
                    <div className="worplace__person">
                        <p>{userState.workplace}</p>
                    </div>
                    <div className="stack__person">
                        <p>{userState.stack}</p>
                    </div>
            </div>
        </div>
    )
}

export default  PersonalProfile;