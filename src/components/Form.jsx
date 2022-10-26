import logo from '../assets/logo2.png'

export function FormRoot({ children }) {
    return (
        <form>
            <div className='bg-grey-1 rounded-lg flex flex-col justify-center items-center p-8 gap-6 mx-auto my-auto h-fit w-fit'>
                { children }
            </div>
        </form>
    )
}

FormRoot.displayName = 'Form.Root'

export function FormContent({ children }) {
    return (
        <div className='bg-blue-2 rounded-lg flex flex-col justify-center items-center w-fit p-8 gap-4 border-solid border-8 border-blue-3'>
            <img src={logo} className="h-8 mb-4" alt=''/>
            { children }
        </div>
    )
}

FormContent.displayName = 'Form.Content'

export const Form = {
    Root: FormRoot,
    Content: FormContent,
}