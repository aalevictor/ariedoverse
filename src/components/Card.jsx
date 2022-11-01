import { Question } from "phosphor-react";

const iconDefault = (
    <Question size={50} />
)

const titleDefault = 'Loren ipsum'
const textDefault = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const footerDefault = 'What is Lorem Ipsum?'
const linkDefault = '/'


function Card({ icon=iconDefault, title=titleDefault, text=textDefault, footer=footerDefault, link=linkDefault }){
    return (<>
        <a href={link} className="bg-offwhite bg-opacity-10 hover:bg-opacity-20 cursor-pointer text-offwhite p-4 px-4 w-[300px] rounded-lg flex flex-col flex-grow justify-between gap-8">
            <div className="flex flex-col gap-2">
                <div className="justify-center flex">{icon}</div>
                <div className="text-lg text-center font-bold">{title}</div>
                <div className="text-xs text-center">{text}</div>
            </div>
            <div className="flex flex-col text-center text-sm font-bold">{footer}</div>
        </a>
    </>)
}

export default Card;