import clsx from "clsx"
import { X } from "phosphor-react"
import { useState } from "react"

function Alert ({type='bad', title='Be Warned', children='Something not ideal might be happening.', timeout=5000, vis=false}){
    const [visible, setVisible] = useState(vis)

    setTimeout(() => {
        setVisible(true)
    }, timeout)

    return (
        <div 
            className={clsx(
                `bg-offwhite border-l-4 border-${type} text-${type} p-4 h-fit rounded fixed z-50 m-4 right-0`,
                visible ? ' hidden' : ''
            )} 
            role="alert">
            <div className="flex justify-between">
                <p class="font-bold">{title}</p>
                <X className="cursor-pointer hover:opacity-20" onClick={() => setVisible(true)} />
            </div>
            <p>{children}</p>
        </div>
    )
}

export default Alert