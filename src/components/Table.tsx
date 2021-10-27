import Client from "../core/Client"
import { editIcon, deleteIcon, sortAcending } from "../components/Icons"
import { useState } from "react"

interface tableProps {
    clients: Client[]
    filter: string
    editClient?: (client: Client) => void
    deleteClient?: (client: Client) => void
}

export default function Table(props: tableProps) {
    
    const showAction = props.editClient || props.deleteClient
    const [sortedField, setSortedField] = useState(null)

    function sortClients(clients) {
        if(sortedField !== null) {
            clients.sort((a,b) => {
                if(a[sortedField] < b[sortedField]) return -1
                if(a[sortedField] > b[sortedField]) return 1
                return 0
            })
        }
        return clients
    }

    function filterClients(clients) {
        if(props.filter !== '') {
            return clients.filter(client => client.name.includes(props.filter))
        }

        return clients
    }

    function RenderHeader() {
        return (
            <tr>
                <th className={`text-center p-3`}>Identificador</th>

                <th onClick={() => setSortedField('name')} className={`p-3 cursor-pointer`}>
                    <span className="flex items-center justify-center">
                        Name {sortAcending()}
                    </span>
                </th>

                <th onClick={() => setSortedField('age')} className={`p-3 cursor-pointer`}>
                    <span className="flex items-center justify-center">
                        Idade {sortAcending()}
                    </span>
                </th>

                {showAction ? <th className={`text-center p-3`}>Ações</th> : false}
            </tr>
        )
    }

    function RenderBody() {
        let { clients } = props
        let sortedClients = sortClients(clients)
        let filtredClients = filterClients(sortedClients)

        return filtredClients.map((client, idx) => {
            return(
                <tr key={client.id} className={idx % 2 === 0 ? `bg-gray-100` : `bg-gray-200`}>
                    <td className={`text-center p-2`}>{client.id}</td>
                    <td className={`text-center p-2`}>{client.name}</td>
                    <td className={`text-center p-2`}>{client.age}</td>
                    {showAction ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className={`flex justify-center`}>
                {props.editClient ? (
                    <button onClick={() => props.editClient?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-4 m-1
                        hover:bg-white`}>
                            {editIcon()}
                    </button>
                ) : false}
                
                {props.editClient ? (
                    <button onClick={() => props.deleteClient?.(client)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-4 m-1
                        hover:bg-white`}>
                            {deleteIcon()}
                    </button>
                ) : false}
            </td>
        )
    }
    
    return (
        <table className={`w-full rounded-lg overflow-hidden`}>
            <thead className={`
                bg-gradient-to-r from-gray-600 to-gray-800 text-gray-50
                p-2
            `}>
                {RenderHeader()}
            </thead>
            <tbody>
                {RenderBody()}
            </tbody>
        </table>
    )
}