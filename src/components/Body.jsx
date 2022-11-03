import clsx from "clsx"

export function Body({children, className}) {
    return (
		<div className={clsx(
      'bg-blue-2 h-full min-h-screen',
      className
    )}>
      {children}
		</div>
    )
}