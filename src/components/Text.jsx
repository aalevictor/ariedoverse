import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export function Text({ size = 'text-md', children='Text', asChild=false, className }) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp className={clsx(
            'font-sans',
            size,
            className
        )}>{ children }</Comp>
    )
}