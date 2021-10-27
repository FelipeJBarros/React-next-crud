import Layout from "../components/Layout"
import Table from "../components/Table"
import Button from "../components/Button"
import Form from "../components/Form"
import SearchBar from "../components/SearchBar"

import Client from "../core/Client"
import { useEffect, useState } from "react"

import ClientRepository from "../core/ClientRepository"
import ClientCollection from "../backend/db/ClientCollection"

export default function Home() {
  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.clientLikeEmpty())
  const [clients, setClients] = useState<Client[]>([])
  const [screen, setScreen] = useState<'table' | 'form'>('table')
  const [filter, setFilter] = useState("")
  
  useEffect(getAllClients, [])

  function getAllClients() {
    repo.getAll().then(clients => {
      setClients(clients)
      setScreen('table')
    })
  }

  function newClient() {
    setClient(Client.clientLikeEmpty())
    setScreen('form')
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAllClients()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAllClients()
  }

  function editClient(client: Client) {
    setClient(client)
    setScreen('form')
  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-gray-600 to-gray-800
      text-3xl
      overflow-y-scroll
    `}>
      <Layout title="Controle de clientes">
        {screen === 'table' ?
          <> 
            <div className={`flex justify-between`}>
              <SearchBar filter={filter} onFilterCShange={setFilter}></SearchBar>
              <Button onclick={newClient}>Novo cliente</Button>
            </div>
            <Table
              clients={clients}
              editClient={editClient}
              deleteClient={deleteClient}
              filter={filter}
            />
          </>
          : <Form
              cancel={() => setScreen('table')}
              client={client}
              onClientChange={saveClient}
            />
        }
      </Layout>
    </div>
  )
}
