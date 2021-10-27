import Input from "./Input"
import Client from "../core/Client"
import Button from "../components/Button"

import { useState } from "react"

interface formProps {
    client: Client
    onClientChange?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: formProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ?
                <Input readonly label="ID" type="text" value={id} className={`mb-2`}/> :
                false
            }

            <Input
                label="Nome"
                type="text"
                value={name}
                className={`mb-2`}
                onchange={setName}
            />

            <Input
                label="Idade"
                type="number"
                value={age}
                onchange={setAge}
            />

            <div className={'flex justify-end mt-6'}>
                <Button
                    onclick={() => props.onClientChange?.(new Client(name, +age, id))}
                    className={'mr-2'}>
                        {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button gray onclick={props.cancel}>Cancelar</Button>
            </div>
        </div>
    )
}