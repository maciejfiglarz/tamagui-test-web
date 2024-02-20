import { useId } from 'react'
import { Form, Label, SizableText, Text, YStack } from 'tamagui'
import { M_input } from '../../atoms/M-input'
import { M_primaryButton } from '../../atoms/M-primary-button'
import isMobilePhone from 'validator/lib/isMobilePhone'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

interface FormData {
  phoneNumber: string
}

const Register = () => {
  const id = useId()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const isPhoneNumberValid = (phoneNumber: string) => {
    return isMobilePhone(phoneNumber, ['pl-PL'], { strictMode: false })
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Do implementacji
    console.log('dane formularza', data)
    console.log('Przejście do kolejnego screena')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <YStack gap="74px" jc={'center'} ai="center" px={55}>
        <Label htmlFor={id} fontSize="$6">
          <YStack gap="24px">
            <SizableText size={'$7'}>Wprowadź numer telefonu</SizableText>
            <SizableText size={'$6'} w={'25ch'} ta={'center'}>
              Wyślemy na Twój telefon SMS z kodem aktywacyjnym
            </SizableText>
          </YStack>
        </Label>

        <YStack gap={'$2'} width="100%">
          <Controller
            name="phoneNumber"
            rules={{
              validate: {
                validPhoneNumber: (value) => isPhoneNumberValid(value) || 'Invalid phone number',
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
                maxLength={9}
                textAlign="center"
                type="tel"
              />
            )}
          />
          <Text style={{ visibility: errors.phoneNumber ? 'visible' : 'hidden' }} textAlign="center">
            To nie jest prawidłowy numer telefonu.
          </Text>
        </YStack>
        <Form.Trigger asChild>
          <M_primaryButton width="100%" mt={'60px'} backgroundColor="$background2">
            Kontynuuj
          </M_primaryButton>
        </Form.Trigger>
      </YStack>
    </Form>
  )
}
export { Register }
