import clsx from 'clsx'
import logo from '../assets/logo2.png'

export function FormRoot({ children, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <div className='bg-grey-1 rounded-lg flex flex-col justify-center items-center p-8 max-sm:p-0 gap-2 max-sm:gap-0 h-fit w-fit'>
                { children }
            </div>
        </form>
    )
}

FormRoot.displayName = 'Form.Root'

export function FormContent({ children, className }) {
    return (
        <div className={clsx(
            'bg-blue-2 rounded-lg flex flex-col justify-center items-center w-fit p-8 gap-4 border-solid border-8 border-blue-3',
            className
        )}>
            <a href='/'><img src={logo} className="flex-grow max-w-[200px] mb-4" alt='Ariedoverse'/></a>
            { children }
        </div>
    )
}

FormContent.displayName = 'Form.Content'

export const Form = {
    Root: FormRoot,
    Content: FormContent,
}