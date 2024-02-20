import { Checkbox as TamaguiCheckbox, Label, Square, XStack } from 'tamagui'
import { useId } from 'react'

function M_checkbox({ size = 20, label = 'Dobierz dodatkowe usługi' }: { size?: number; label?: string }) {
  const id = useId()

  return (
    <XStack alignItems="center" space="$6">
      <TamaguiCheckbox
        id={id}
        br={4}
        w={size}
        h={size}
        style={{
          //Nie wiem, jak ustawić outline w zależności od "$color1"
          outline: '3px solid grey',
          padding: 0,
        }}
      >
        <TamaguiCheckbox.Indicator>
          <Square size={size - 4} backgroundColor="$color1" br={4} />
        </TamaguiCheckbox.Indicator>
      </TamaguiCheckbox>

      <Label htmlFor={id} fontSize="$6">
        {label}
      </Label>
    </XStack>
  )
}

export { M_checkbox }
