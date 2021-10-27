import Title from "./Title";

interface layoutProps {
    title: string
    children: any
}

export default function Layout(props: layoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            rounded-lg py-2
            bg-gray-50
        `}>
            <Title>{props.title}</Title>
            <div className={`
                px-4 py-2
                font-light
            `}>
                <div className={`p-6 text-lg`}>{props.children}</div>
            </div>
        </div>
    );
}