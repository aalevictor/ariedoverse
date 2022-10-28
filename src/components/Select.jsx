
import * as SelectR from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';

export function Select(props) {

    return (
        // <div className='flex items-center gap-3 py-2 px-3 rounded w-full bg-offwhite focus-within:ring-2 ring-blue-1'>
        //     { props.children }
        // </div>
        <SelectR.Root onValueChange={props.onValueChange}>
            <SelectR.Trigger id='gameId' name='gameId' className='flex justify-between items-center gap-3 py-2 px-3 rounded w-full bg-offwhite focus-within:ring-2 ring-blue-1 outline-none text-blue-2 text-xs placeholder:text-grey-1'>
                <SelectR.Value className="text-grey-1" placeholder={props.placeholder} />
                <CaretDown size={20} />
            </SelectR.Trigger>        
            <SelectR.Portal className='z-50'>
                <SelectR.Content>
                    <SelectR.Viewport className='bg-offwhite rounded p-2 '>
                        {props.children}
                    </SelectR.Viewport>
                </SelectR.Content>
            </SelectR.Portal>
        </SelectR.Root>
    )
}