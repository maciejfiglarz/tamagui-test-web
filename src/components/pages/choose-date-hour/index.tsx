import { SizableText, Stack, Text, XStack, YStack } from 'tamagui'
import { M_arrowButton } from '../../atoms/M-arrow-button'
import { M_dateButton } from '../../atoms/M-date-button'
import { M_primaryButton } from '../../atoms/M-primary-button'
import { M_calendar_web } from '../../molecules/M-calendar-web'

const ChooseDateAndHour = () => {
  return (
    <>
      <YStack jc="center" ai="center" px={55}>
        <YStack>
          <Stack style={{ alignSelf: 'start' }} ml={'-8px'}>
            <M_arrowButton />
          </Stack>

          <Stack mt="29px">
            <SizableText size={'$8'} style={{ fontWeight: 400 }}>
              Super! Wybierz datę naszej usługi
            </SizableText>
            <SizableText size={'$6'}>
              Szacunkowy czas trwania usługi:{' '}
              <Text style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>3h</Text>
            </SizableText>
          </Stack>
        </YStack>
        <Stack mt={30}>
          <M_calendar_web
            disablePast
            showDaysOutsideCurrentMonth
            shouldDisableDate={(date) => {
              return date.format('YYYY-MM-DD') === '2023-10-11'
            }}
          />
        </Stack>

        <YStack jc="center">
          <SizableText w="45ch" textAlign="left">
            Wybierz godzinę
          </SizableText>
          <XStack gap={30} mt={9}>
            <M_dateButton w={60} h={35}>
              8:00
            </M_dateButton>
            <M_dateButton w={60} h={35}>
              9:00
            </M_dateButton>
            <M_dateButton w={60} h={35}>
              10:00
            </M_dateButton>
            <M_dateButton w={60} h={35}>
              11:00
            </M_dateButton>
          </XStack>
          <XStack jc={'center'} mt={35}>
            <SizableText color="$color1" size={'$2'} w="45ch" textAlign="center">
              Anulowanie lub zmiana terminu możliwa jest do 3 dni roboczych przed zaplanowaną usługą
            </SizableText>
          </XStack>
          <M_primaryButton width="100%" mt={26} backgroundColor="$background2">
            Dalej
          </M_primaryButton>
        </YStack>
      </YStack>
    </>
  )
}
export { ChooseDateAndHour }
