import './App.css'
import { Providers } from './Providers/index.tsx'
// import { MessagesReply } from './components/pages/messages-reply/index.tsx'
// import { ChooseDate } from './components/pages/choose-date/index.tsx'
import { ChooseDate } from './components/pages/choose-date/index.tsx'
import { Desktop } from './components/pages/desktop'
import { PaymentProgress} from './components/pages/payment-progress'
import { Register} from './components/pages/register'
import { Event } from './components/pages/event/index.tsx'
import { PaymentChooseMethod } from './components/pages/payment-choose-method/index.tsx'

function App() {
  return (
    <Providers>
      {/* <PaymentChooseMethod /> */}
      {/* <PaymentProgress /> */}
      {/* <Register /> */}
      {/* <MessagesReply /> */}
      {/* <ChooseDate /> */}
      <Desktop />
      {/* <Event /> */}
    </Providers>
  )
}

export default App
