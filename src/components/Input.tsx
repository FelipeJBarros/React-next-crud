interface inputProps {
    label: string
    type: 'text' | 'number'
    value: any
    readonly?: boolean
    className?: string
    onchange?: (value: any) => void
}

export default function Input(props: inputProps) {
    return (
        <div className={`
            flex flex-col
        `}>
            <label className={`font-semibold text-xl mb-4`}>
                {props.label}</label>
            <input
                onChange={e => props.onchange?.(e.target.value)}
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readonly}
                className={`
                    border border-gray-500 rounded-md
                    focus:outline-none
                    ${props.readonly ? 'bg-gray-200' : false}
                    px-4 py-2 text-lg
                    ${props.className}
                `}/>
        </div>
    )
}