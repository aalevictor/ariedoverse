import clsx from "clsx"

export function Content(props) {
    return (
        <div className={clsx(
            'max-w-[1024px] mx-auto py-8 max-lg:px-4 max-lg:py-3',
            props.className
        )}>
            {props.children}	
		</div>
    )
}