import style from './profileStyle.module.css'

type ProfileProps = {
    firstname: string,
    id: number | undefined,
    nickname: string,
    lastname: string,
    workplace: string,
    stack: string,
    toPersonalProfile: any
}

const ItemResume = ({lastname, nickname, workplace, stack, id, toPersonalProfile, firstname} : ProfileProps) => {
    console.log({id})
    return (
       <div onClick={() => toPersonalProfile(id)} className={style.profile}>
           <h1 className="nickname"> <span>Ник:</span> {nickname}</h1>
           <div className="firstname"> <span>Имя:</span> {firstname}</div>
           <div className="lastname"> <span>Фамилия:</span> {lastname}</div>
           <div className="workplace"><span>Рабочее место:</span>{workplace}</div>
           <div className="stack"> <span>Основные инструменты:</span>{stack}</div>
       </div>
    )
}

export default ItemResume;