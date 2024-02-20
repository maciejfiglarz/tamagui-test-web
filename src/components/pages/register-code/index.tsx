import { useId, useState, ChangeEvent } from 'react'
import { Button, Label, SizableText, YStack } from 'tamagui'
import { M_input } from '../../atoms/M-input'

const RegisterCode = () => {
  const id = useId()
  const [code, setCode] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericCode = e.target.value.replace(/[^0-9]/g, '')
    setCode(numericCode)
  }

  return (
    <>
      <YStack gap="24px" jc={'center'} ai="center" px={55}>
        <Label htmlFor={id} fontSize="$6">
          <YStack gap="24px">
            <SizableText size={'$7'}>SMS został wysłany na numer</SizableText>
            <SizableText size={'$6'} w={'25ch'} style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              +48 500 500 500
            </SizableText>
          </YStack>
        </Label>
        <M_input id={id} inputMode="tel" width="100%" h={40} maxLength={6} value={code} onChange={handleInputChange} />

        {/* unstyled nie do końca działa na Storybook */}
        <Button size="$5"  style={{alignItems:"start"}} px={0} backgroundColor="transparent" borderWidth="0" unstyled>
          Wyślij kod ponownie
        </Button>
      </YStack>
    </>
  )
}
export { RegisterCode }
