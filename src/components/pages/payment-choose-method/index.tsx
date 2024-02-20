import { SizableText, Stack, YStack } from 'tamagui'
import { M_arrowButton } from '../../atoms/M-arrow-button'
import { M_secondaryButton } from '../../atoms/M-secondary-button'

const PaymentChooseMethod = () => {
  return (
    <>
      <YStack jc="flex-start" style={{ alignItems: 'start' }} px={55}>
        <YStack>
          <Stack style={{ alignItems: 'start' }} ml={'-8px'}>
            <M_arrowButton />
          </Stack>

          <SizableText size={'$8'} style={{ fontWeight: 400 }} mt={33}>
            Wybierz metodę płatności
          </SizableText>
        </YStack>
        <YStack gap={10} mt={109}>
          <M_secondaryButton h={40}>Karta płatnicza</M_secondaryButton>
          <M_secondaryButton h={40}>Google Pay</M_secondaryButton>
          <M_secondaryButton h={40}>PayPal</M_secondaryButton>
          <SizableText size="$5" style={{ fontWeight: 600 }}  textAlign="left" mt={121}>
            Płatności
          </SizableText>
          <SizableText color="$color1" size={'$2'} textAlign="left">
            Przy realizacji zamówień cyklicznych płatność pobierana jest każdorazowo po realizacji usługi. Metoda
            płatności wybrana przy składaniu zamówienia dotyczy wszystkich kolejnych usług w cyklu. Istnieje możliwość
            zmiany metody płatności w każdym momencie.
          </SizableText>
        </YStack>
      </YStack>
    </>
  )
}
export { PaymentChooseMethod }
