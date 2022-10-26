import * as CheckboxR from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export function Checkbox(props) {
    return (
        <CheckboxR.Root className='w-4 h-4 p-[2px] bg-offwhite rounded focus:ring-2 ring-blue-1 outline-none' {...props}>
            <CheckboxR.Indicator asChild>
                <Check weight='bold' className='h-3 w-3 text-blue-2' />
            </CheckboxR.Indicator>
        </CheckboxR.Root>
    )
}