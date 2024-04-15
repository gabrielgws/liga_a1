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

// const supabaseco = process.env.SUPABASE_CO;
// const supabaseAnonKey = process.env.ANON_KEY;
// const supabaseco = import.meta.env.SUPABASE_CO;
// const supabaseAnonKey = import.meta.env.ANON_KEY;

// console.log('supabaseTest: ', supabaseco)

// if (!supabaseco || !supabaseAnonKey) {
//   throw new Error("Supabase URL ou chave de autenticação anônima não definidas.");
// }

// const supabase = createClient(supabaseco, supabaseAnonKey);
const supabase = createClient(
  'https://sqfgdhnmwrwrgkcxwshz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZmdkaG5td3J3cmdrY3h3c2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMDk5NzYsImV4cCI6MjAyNjY4NTk3Nn0.ZdrtTltGKYBFJUYDWze82-SWA5_99pbcxhVVx536q1Q',
)

interface PlayerDataProps {
  id: number
  name: string
  score: number
}

const Liga = () => {
  const [players, setPlayers] = useState<PlayerDataProps[]>([])

  useEffect(() => {
    getPlayers()
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

  return (
    <>
      <Header />

      <div className="mt-24 px-7">
        <div className="flex items-center justify-center">
          <LogoLigaA1 className="w-[200px] fill-primary" />
        </div>

        <div className="mb-8 mt-8">
          <Table>
            <TableCaption>Pontuação atualizada em 20/03/2024</TableCaption>
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
