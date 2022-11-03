import { Slot } from '@radix-ui/react-slot';


function TextInputRoot(props) {
    return (
        <div className='flex items-center gap-3 py-2 px-3 rounded w-full bg-offwhite focus-within:ring-2 ring-blue-1'>
            { props.children }
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon(props) {
    return (
        <Slot className='w-5 h-5 text-blue-2 max-sm:hidden'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props)  {
    return (
        <input 
            className='bg-transparent flex-1 text-blue-2 text-xs placeholder:text-grey-1 outline-none md:w-[250px]'
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}