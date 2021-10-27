interface buttomProps {
    children: any
    gray?: boolean
    className?: string
    onclick?: () => void
}

export default function button(props: buttomProps) {
    return(
        <div>
            <button
                onClick={props.onclick}
                className={`
                bg-gradient-to-r ${props.gray ? 'from-gray-400 to-gray-500'
                : 'from-green-400 to-green-500'}
                text-white rounded-md p-2 mb-2 ${props.className}`
            }>
                {props.children}
            </button>
        </div>
    )
}