'use client'

import LogoLigaA1 from '@/assets/logo-liga-a1'
import { Header } from '@/components/Shared/Header'
import { RulesModal } from '@/components/Shared/RulesModal'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
const supabaseco = process.env.NEXT_PUBLIC_SUPABASE_CO
const supabaseAnonKey = process.env.NEXT_PUBLIC_ANON_KEY

if (!supabaseco || !supabaseAnonKey) {
  throw new Error(
    'Supabase URL ou chave de autenticação anônima não definidas.',
  )
}

// const supabase = createClient(supabaseco, supabaseAnonKey);
const supabase = createClient(`${supabaseco}`, `${supabaseAnonKey}`)

interface PlayerDataProps {
  id: number
  name: string
  score: number
}

interface DataAttProps {
  // id: number
  data: string
}

const Liga = () => {
  const [players, setPlayers] = useState<PlayerDataProps[]>([])
  const [updatedAt, setUpdatedAt] = useState<string>('')

  useEffect(() => {
    getPlayers()
    getDataAtt()
  }, [])

  async function getPlayers() {
    const { data, error } = await supabase
      .from('Player')
      .select()
      .order('score', { ascending: false })

    if (error) {
      console.error('Erro ao buscar os jogadores do Supabase:', error.message)
      return
    }
    if (data) {
      setPlayers(data)
    }
  }

  async function getDataAtt() {
    const { data, error } = await supabase.from('data_atualizacao').select()

    if (error) {
      console.error('Erro ao buscar a data de atualização:', error.message)
      return
    }

    if (data && data.length > 0) {
      setUpdatedAt(data[0].data)
    }
  }

  return (
    <>
      <Header />

      <div className="mt-24 px-7">
        <div className="flex items-center justify-center">
          <LogoLigaA1 className="w-[200px] fill-primary" />
        </div>

        <div className="mb-8 mt-8">
          <Table>
            <TableCaption>{`Pontuação atualizada em ${updatedAt}`}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Participante</TableHead>
                <TableHead>Posição</TableHead>
                <TableHead>Pontuação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player, index) => (
                <TableRow key={player.id}>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{`${index + 1}°`}</TableCell>
                  <TableCell>{player.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <RulesModal />
    </>
  )
}

export default Liga
