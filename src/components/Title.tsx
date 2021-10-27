export default function Title(props) {
    return (
        <div>
            <h1 className={`
                text-gray-800 
                px-2 py-2 text-2xl
            `}>{props.children}</h1>
            <hr className={`
                border-2 border-gray-800
            `} />
        </div>
    )
}