interface searchBarProps {
    filter: string
    onFilterCShange: (filter: string) => void
}

export default function SearchBar(props: searchBarProps) {
    return (
        <div>
            <input
                type="text"
                className={`
                    border-2 border-solid border-gray-500 rounded-full py-2 px-4 mb-2
                    focus:outline-none
                `}
                value={props.filter}
                placeholder="Pesquise por..."
                onChange={e => props.onFilterCShange(e.target.value)}
            />
        </div>
    )
}