import style from './profileStyle.module.css'

type ProfileProps = {
    nickname: string,
    workplace: string,
    stack: string,
}

const Profile = ({nickname, workplace, stack} : ProfileProps) => {
    return (
       <div className={style.profile}>
           <h1 className="nickname"> <span>Ник:</span> {nickname}</h1>
           <div className="workplace"><span>Рабочее место:</span>{workplace}</div>
           <div className="stack"> <span>Основные инструменты:</span>{stack}</div>
       </div>
    )
}

export default  Profile;