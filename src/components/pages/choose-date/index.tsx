import { SizableText, Stack, Text, YStack } from 'tamagui'
import { M_arrowButton } from '../../atoms/M-arrow-button'
import { M_primaryButton } from '../../atoms/M-primary-button'
import { M_calendar_web } from '../../molecules/M-calendar-web'

const ChooseDate = () => {
  return (
    <>
      <YStack jc="center" ai="center" px={55}>
        <YStack>
          <Stack style={{alignSelf:"start"}}  ml={'-8px'}>
            <M_arrowButton />
          </Stack>

          <Stack mt="29px">
            <SizableText size={'$8'} style={{fontWeight:400}} >
              Super! Wybierz datę naszej usługi
            </SizableText>
            <SizableText size={'$6'}>
              Szacunkowy czas trwania usługi:{' '}
              <Text style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>3h</Text>
            </SizableText>
          </Stack>
        </YStack>
        <Stack mt={57}>
          <M_calendar_web
            disablePast
            showDaysOutsideCurrentMonth
            shouldDisableDate={(date) => {
              return date.format('YYYY-MM-DD') === '2023-10-11'
            }}
          />
        </Stack>
        <Stack gap="29px" mt={80}>
          <SizableText color="$color1" size={'$2'} w="45ch">
            Anulowanie lub zmiana terminu możliwa jest do 3 dni roboczych przed zaplanowaną usługą
          </SizableText>
          <M_primaryButton width="100%" backgroundColor="$background2">
            Dalej
          </M_primaryButton>
        </Stack>
      </YStack>
    </>
  )
}
export { ChooseDate }
