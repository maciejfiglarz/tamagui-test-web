import { Text, XStack, YStack, View, styled, SizableText } from 'tamagui'
import { M_Hero } from '../../molecules/M-hero'
import background from '../../../assets/3.png'
import { M_JoinButton } from '../../atoms/M-join-button'
import { M_EventList } from '../../molecules/M-event-list'
import { M_MainTitle } from '../../atoms/M-main-title'
import { M_Paragraph } from '../../atoms/M-paragraph'

const Event = () => {
  return (
    <>
      <M_Hero
        imageUrl={background}
        primaryLines={['EKO-PRANIE', 'Kończy się za 31 dni']}
        secondaryLines={['123 987 uczestników']}
      />
      <M_JoinButton />
      <M_EventList />
      <M_MainTitle>Szczegóły</M_MainTitle>
      <SizableText size={'$1'} ta={"left"}>
        Czy wiesz, że pranie ubrań w wyższych temperaturach zużywa znacznie więcej energii? Dołącz do naszego wyzwania
        'Eko-Pranie' i przez miesiąc pierz swoje ubrania w temperaturze 30°C. To prosty sposób na zmniejszenie Twojego
        śladu węglowego i oszczędzenie energii. Za każdy tydzień przestrzegania wyzwania zdobędziesz punkty, które
        zbliżą Cię do zdobycia odznaki 'Mistrz Eko-Prania'. Bądź świadomym i działaj proekologicznie!
      </SizableText>
    </>
  )
}

export { Event }
