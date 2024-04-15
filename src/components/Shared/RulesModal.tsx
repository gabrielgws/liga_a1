import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { createClient } from '@supabase/supabase-js'
import { MoveRight, Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'

const supabase = createClient(
  'https://sqfgdhnmwrwrgkcxwshz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZmdkaG5td3J3cmdrY3h3c2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMDk5NzYsImV4cCI6MjAyNjY4NTk3Nn0.ZdrtTltGKYBFJUYDWze82-SWA5_99pbcxhVVx536q1Q',
)

interface RulesProps {
  id: number
  title: string
  description: string
  points: number
  type: string
}

export const RulesModal = () => {
  const [rules, setRules] = useState<RulesProps[]>([])

  useEffect(() => {
    getRules()
  }, [])

  async function getRules() {
    const { data, error } = await supabase.from('Rules').select()

    if (error) {
      console.error('Erro ao buscar os jogadores do Supabase:', error.message)
      return
    }
    if (data) {
      setRules(data)
    }
  }

  return (
    <div className="fixed bottom-6 right-6">
      <Dialog>
        <DialogTrigger>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <p className="text-3xl font-bold">?</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Regras de pontuações</DialogTitle>
            <DialogDescription className="max-h-96 overflow-auto">
              <div className="mt-4 flex flex-col items-start">
                <h4 className="flex flex-row items-center gap-3 text-lg">
                  <Trophy width={20} height={20} /> Premiação
                </h4>
                <h5 className="mt-4 text-base">1. Rodízio</h5>
                <h5 className="mt-1 text-base">2. Rodízio</h5>
                <h5 className="mt-1 text-base">3. Açaí 700ML</h5>
              </div>

              <Separator className="my-8" />

              <div className="flex flex-col items-start">
                <h4 className="text-lg">### Como ganhar pontos</h4>
                <h5 className="text-base">## +3 pontos</h5>
                {rules.map((rule) => (
                  <>
                    <div className="text-left" key={rule.id}>
                      {rule.points === 3 && rule.type === 'positivo' ? (
                        <h5 className="mt-2 flex flex-row items-center gap-2 text-base">
                          <MoveRight width={10} height={10} /> {rule.title}
                        </h5>
                      ) : (
                        false
                      )}
                    </div>
                  </>
                ))}
              </div>

              <div className="mt-4 flex flex-col items-start">
                <h5 className="text-base">## +2 pontos</h5>
                {rules.map((rule) => (
                  <>
                    <div className="text-left " key={rule.id}>
                      {rule.points === 2 && rule.type === 'positivo' ? (
                        <h5 className="mt-2 flex flex-row items-center gap-2 text-base">
                          <MoveRight width={10} height={10} /> {rule.title}
                        </h5>
                      ) : (
                        false
                      )}
                    </div>
                  </>
                ))}
              </div>

              <div className="mt-4 flex flex-col items-start">
                <h5 className="text-base">## +1 pontos</h5>
                {rules.map((rule) => (
                  <>
                    <div className="text-left" key={rule.id}>
                      {rule.points === 1 && rule.type === 'positivo' ? (
                        <h5 className="mt-2 flex flex-row items-center gap-2 text-base">
                          <MoveRight width={10} height={10} /> {rule.title}
                        </h5>
                      ) : (
                        false
                      )}
                    </div>
                  </>
                ))}

                <Separator className="my-8" />

                <h4 className="text-lg">### Como perder pontos</h4>
                <h5 className="text-base">## -2 pontos</h5>
                {rules.map((rule) => (
                  <>
                    <div className="text-left" key={rule.id}>
                      {rule.points === 2 && rule.type === 'negativo' ? (
                        <h5 className="mt-2 flex flex-row items-center gap-2 text-base">
                          <MoveRight width={10} height={10} /> {rule.title}
                        </h5>
                      ) : (
                        false
                      )}
                    </div>
                  </>
                ))}
              </div>

              <div className="mt-4 flex flex-col items-start">
                <h5 className="text-base">## -1 pontos</h5>
                {rules.map((rule) => (
                  <>
                    <div className="text-left " key={rule.id}>
                      {rule.points === 1 && rule.type === 'negativo' ? (
                        <h5 className="mt-2 flex flex-row items-center gap-2 text-base">
                          <MoveRight width={10} height={10} /> {rule.title}
                        </h5>
                      ) : (
                        false
                      )}
                    </div>
                  </>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
