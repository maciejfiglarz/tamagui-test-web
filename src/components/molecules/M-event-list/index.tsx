import { SizableText, Image, styled, View, Text, H2, YGroup, Separator, XGroup, YStack, XStack } from 'tamagui'
import { M_Paragraph } from '../../atoms/M-paragraph'

import target from '../../../assets/target.svg'
import calendar from '../../../assets/calendar.svg'
import competence from '../../../assets/competence.svg'
import badge from '../../../assets/badge.png'

const Icon = styled(Image, {
  marginRight: 10,
})

const ListItem = styled(XStack, {})

// const StyledItem = styled(ListItem, {})

// const StyledTitle = styled(H2, {})
// const StyledParagraph = styled(Paragraph, {})

// const list = [{ icon: target,title:"",description }]

const M_EventList = () => {
  return (
    <View mt={25} w={'100%'}>
      <YStack>
        <XStack borderBottomWidth={1} borderColor={'$borderColor'} mb={10} w={'100%'} pb={10}>
          <Icon source={{ uri: target, width: 40, height: 40 }} />
          <View ml={10}>
            <SizableText size={'$2'} fontWeight={'bold'} ta="left">
              Cel
            </SizableText>
            <SizableText size={'$1'}>
              Zmniejszenie zużycia energii przez pranie w niższej temperaturze aż do 40%
            </SizableText>
          </View>
        </XStack>

        <XStack borderBottomWidth={1} borderColor={'$borderColor'} mb={10} w={'100%'} pb={10}>
          <Icon source={{ uri: calendar, width: 40, height: 40 }} />
          <View ml={10}>
            <SizableText size={'$2'} fontWeight={'bold'} ta="left">
              Przedział czasu
            </SizableText>
            <SizableText size={'$1'}>01.06- 31.06 (31 dni)</SizableText>
          </View>
        </XStack>

        <XStack borderBottomWidth={1} borderColor={'$borderColor'} mb={10} w={'100%'} pb={10}>
          <YStack>
            <Icon source={{ uri: competence, width: 40, height: 40 }} />
          </YStack>
          <YStack style={{ marginLeft: 10 }}>
            <YStack>
              <SizableText size={'$2'} fontWeight={'bold'} ta="left">
                Przedział czasu
              </SizableText>
              <SizableText size={'$1'}>01.06- 31.06 (31 dni)</SizableText>
            </YStack>
          </YStack>
        </XStack>

        <XStack borderBottomWidth={1} borderColor={'$borderColor'} mb={10} w={'100%'} pb={10}>
          <YStack>
            <Icon source={{ uri: badge, width: 40, height: 40 }} />
          </YStack>
          <YStack style={{ marginLeft: 10 }}>
            <YStack>
              <SizableText size={'$2'} fontWeight={'bold'} ta="left">
              Zdobądź odznakę i punkty
              </SizableText>
              <SizableText size={'$1'}>Za każdy tydzień przestrzegania wyzwania zdobędziesz punkty, które zbliżą Cię do zdobycia odznaki 'Mistrz Eko-Prania'. Za każdy tydzień przestrzegania wyzwania zdobędziesz punkty, które zbliżą Cię do zdobycia odznaki 'Mistrz Eko-Prania'. </SizableText>
            </YStack>
          </YStack>
        </XStack>
      </YStack>
    </View>
  )
}

export { M_EventList }
