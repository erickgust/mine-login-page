import { Header } from './components/header'

import { ReactComponent as Power } from './assets/power.svg'
import { ReactComponent as Baby } from './assets/baby.svg'
import { ReactComponent as User } from './assets/user.svg'
import { ReactComponent as Vibrate } from './assets/vibrate.svg'
import { ReactComponent as Controller } from './assets/game-controller.svg'

import { InfoCard } from './components/info-card'

function App () {
  return (
    <main className='bg-mine-background bg-no-repeat bg-cover h-screen py-8'>
      <Header />

      <InfoCard
        logo={<Power title='Botão de desligar' />}
        title='Jogue também offline'
      />
      <InfoCard
        logo={<User title='Ícone de usuário' />}
        title='67 jogadores'
      />
      <InfoCard
        logo={<Controller title='Controle de video-game' />}
        title='Compatível com uso remoto'
      />
      <InfoCard
        logo={<Vibrate title='Celular vibrando' />}
        title='Vibração no controle'
      />
      <InfoCard
        logo={<Baby title='Criança sorrindo' />}
        title='Permitido para menores'
      />
    </main>
  )
}

export { App }
