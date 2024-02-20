import { useId } from 'react'
import { Form, Label, SizableText, Stack, Text, XStack, YStack } from 'tamagui'
import { M_arrowButton } from '../../atoms/M-arrow-button'
import { M_input } from '../../atoms/M-input'
import { M_secondaryButton } from '../../atoms/M-secondary-button'
import { M_primaryButton } from '../../atoms/M-primary-button'
import { M_iconButton } from '../../atoms/M-icon-button'
import { X } from '@tamagui/lucide-icons'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { isCreditCardExpirationDateValid, isCreditCardValid, isCvvValid } from './validation'

interface FormData {
  creditCard: string
  expirationDate: string
  cvv: string
}

const PaymentAddCard = () => {
  const id = useId()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Do implementacji
    console.log('dane formularza', data)
    console.log('Przejście do kolejnego screena')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <YStack px={22}>
        <YStack margin={-20} backgroundColor="$color2">
          <YStack margin={20}>
            <Stack style={{alignSelf:"start"}}  ml={'-8px'} zi={1}>
              <M_arrowButton />
            </Stack>
            <SizableText size={'$8'} style={{fontWeight:400,alignSelf:"start"} } mt={33}  zi={3}>
              Dodaj kartę
            </SizableText>
          </YStack>
        </YStack>
        <XStack mt={28} mr={-16} style={{alignSelf:"end"}}  zi={3}>
          <M_iconButton size={'$2'} icon={<X size="5" color="$background2" />} />
        </XStack>

        <YStack mt={74} gap={10}>
          <Label htmlFor={id} fontSize="$6" color="$color1">
            Numer karty
          </Label>
          <YStack gap={'$2'}>
            <Controller
              name="creditCard"
              rules={{
                validate: {
                  validCreditCardNumber: (value) => isCreditCardValid(value) || 'Invalid credit card',
                },
              }}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <M_input
                  id={field.name}
                  inputMode="tel"
                  h={40}
                  value={field.value}
                  maxLength={16}
                  onChangeText={(text: string) => {
                    const numericValue = text.replace(/[^0-9]/g, '')
                    field.onChange(numericValue)
                  }}
                  textAlign="center"
                />
              )}
            />
            <Text style={{ visibility: errors.creditCard ? 'visible' : 'hidden' }} textAlign="center">
              To nie jest prawidłowy numer karty.
            </Text>
          </YStack>
          <XStack gap={20}>
            <YStack gap={10} flex={1}>
              <Label htmlFor={id} fontSize="$6" color="$color1">
                Data ważności
              </Label>
              <YStack gap={'$2'}>
                <Controller
                  name="expirationDate"
                  rules={{
                    validate: {
                      validExpirationDate: (value) =>
                        isCreditCardExpirationDateValid(value) || 'Invalid expiration date',
                    },
                  }}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <M_input
                      id={field.name}
                      inputMode="tel"
                      h={40}
                      value={field.value}
                      onChangeText={(text: string) => {
                        const numericValue = text.replace(/[^0-9/]/g, '')
                        field.onChange(numericValue)
                      }}
                      textAlign="center"
                      width={'100%'}
                      maxLength={5}
                    />
                  )}
                />
                <Text style={{ visibility: errors.expirationDate ? 'visible' : 'hidden' }} textAlign="center" fontSize={3} >
                  Nieprawidłowa data ważności.
                </Text>
              </YStack>
            </YStack>
            <YStack gap={10} flex={1}>
              <Label htmlFor={id} fontSize="$6" color="$color1">
                CVV
              </Label>
              <YStack gap={'$2'}>
                <Controller
                  name="cvv"
                  rules={{
                    validate: {
                      validCvv: (value) => isCvvValid(value) || 'Invalid CVV',
                    },
                  }}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <M_input
                      id={field.name}
                      inputMode="tel"
                      h={40}
                      value={field.value}
                      onChangeText={(text: string) => {
                        const numericValue = text.replace(/[^0-9]/g, '')
                        field.onChange(numericValue)
                      }}
                      textAlign="center"
                      width={'100%'}
                      maxLength={4}
                    />
                  )}
                />
                <Text style={{ visibility: errors.cvv ? 'visible' : 'hidden' }} textAlign="center">
                  Nieprawidłowy kod CVV.
                </Text>
              </YStack>
            </YStack>
          </XStack>
        </YStack>

        <SizableText color="$color1" size={'$3'} textAlign="left" mt={119}>
          Zapisując dane, akceptujesz regulamin. Kartę możesz w każdej chwili usunąć w Menu w zakładce Płatności.
        </SizableText>
        <YStack gap={19} mt={32}>
          <Form.Trigger asChild>
            <M_primaryButton backgroundColor="$background2" fontSize="$7">
              Użyj i zapisz na przyszłość
            </M_primaryButton>
          </Form.Trigger>
          <Form.Trigger asChild>
            <M_secondaryButton fontSize="$6">Użyj tylko raz</M_secondaryButton>
          </Form.Trigger>
        </YStack>
      </YStack>
    </Form>
  )
}
export { PaymentAddCard }
