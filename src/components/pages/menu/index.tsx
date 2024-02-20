import { ChangeEvent, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

import { X } from '@tamagui/lucide-icons'
import { Button, Input, ListItem, Separator, XStack, YStack } from 'tamagui'
import { M_avatar } from '../../atoms/M-avatar'
import { M_countIndicator } from '../../atoms/M-count-indicator'
import { M_iconButton } from '../../atoms/M-icon-button'

const Menu = () => {
  const [userName, setUserName] = useState('Nazwa użytkownika')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputDisabled, setInputDisabled] = useState(true)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const handleStartEdit = () => {
    flushSync(() => {
      setInputDisabled(false)
    })
    if (!inputRef.current) return
    inputRef.current.focus()
  }

  return (
    <YStack>
      <XStack mr={-16} alignSelf="auto">
        <M_iconButton
          size={'$2'}
          focusStyle={{ outlineColor: '$borderFocus' }}
          icon={<X size="5" color="$background3" />}
        />
      </XStack>
      <XStack gap={29}>
        <M_avatar />
        <YStack style={{ alignItems: 'start' }} gap={28}>
          <Input
            tabIndex={0}
            // #todo
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref={inputRef}
            value={userName}
            onChange={handleOnChange}
            onBlur={() => setInputDisabled(true)}
            size={'$5'}
            fontWeight="600"
            unstyled
            borderWidth={0}
            height={36}
            px={6}
            py={0}
            ml={-6}
            textAlign="left"
            disabled={inputDisabled}
            maxLength={20}
            color="$color"
            focusStyle={{ outlineColor: '$borderFocus' }}
          ></Input>
          <Button
            size={'$2'}
            marginLeft={-6}
            onPress={handleStartEdit}
            jc={'center'}
            bc="transparent"
            borderWidth={0}
            unstyled
            focusStyle={{ outlineColor: '$borderFocus' }}
          >
            Edytuj
          </Button>
        </YStack>
      </XStack>
      <Separator mt={24} />
      <ListItem mt={10} paddingLeft={4}>
        <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
          Moje zlecenia
        </Button>
      </ListItem>
      <ListItem paddingLeft={4}>
        <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
          Moje lokale
        </Button>
      </ListItem>
      <ListItem paddingLeft={4}>
        <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
          Płatności
        </Button>
      </ListItem>
      <ListItem paddingLeft={4}>
        <XStack gap={4}>
          <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
            Wiadomości
          </Button>
          <M_countIndicator />
        </XStack>
      </ListItem>
      <Separator mt={24} />
      <ListItem mt={10} paddingLeft={4}>
        <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
          Pomoc
        </Button>
      </ListItem>
      <ListItem paddingLeft={4}>
        <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
          Ustawienia
        </Button>
      </ListItem>
      <ListItem paddingLeft={4}>
        <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
          Prywatność
        </Button>
      </ListItem>
      <ListItem paddingLeft={4}>
        <Button fontSize={'$4'} padding={6} focusStyle={{ outlineColor: '$borderFocus' }}>
          O nas
        </Button>
      </ListItem>
    </YStack>
  )
}
export { Menu }
