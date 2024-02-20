import { useId } from 'react'
import { Form, Label, SizableText, Text, YStack } from 'tamagui'
import { M_input } from '../../atoms/M-input'
import { M_primaryButton } from '../../atoms/M-primary-button'
import isPostalCode from 'validator/lib/isPostalCode'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

interface FormData {
  postalCode: string
}

const RegisterCheckAvailability = () => {
  const id = useId()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const isPostalCodeValid = (postalCode: string) => {
    return isPostalCode(postalCode, 'PL')
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
            <SizableText size={'$6'} w={'30ch'} ta={'center'}>
              Wprowadź swój kod pocztowy, a my sprawdzimy czy jesteśmy dostępni w Twojej okolicy
            </SizableText>
          </YStack>
        </Label>
        <YStack gap={'$2'} width="100%">
          <Controller
            name="postalCode"
            rules={{
              validate: {
                validPostalCode: (value) => isPostalCodeValid(value) || 'Invalid postal code',
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
                  const numericValue = text.replace(/[^0-9-]/g, '')
                  field.onChange(numericValue)
                }}
                textAlign="center"
                maxLength={6}
              />
            )}
          />
          <Text style={{ visibility: errors.postalCode ? 'visible' : 'hidden' }} textAlign="center">
            To nie jest prawidłowy kod pocztowy.
          </Text>
        </YStack>
        <Form.Trigger width="100%" mt={'60px'} padding={0}>
          <M_primaryButton backgroundColor="$background2" width="100%">
            Kontynuuj
          </M_primaryButton>
        </Form.Trigger>
      </YStack>
    </Form>
  )
}
export { RegisterCheckAvailability }
