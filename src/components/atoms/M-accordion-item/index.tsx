import { ChevronDown } from '@tamagui/lucide-icons'
import { Accordion, Paragraph, SizableText, Square, XStack } from 'tamagui'

const M_accordionItem = () => {
  return (
    <>
      <Accordion width="$20" type="multiple">
        <Accordion.Item value="a1">
          <Accordion.Trigger
            flexDirection="row"
            justifyContent="space-between"
            style={{ outline: 'none', borderRadius: '0px' }}
            px="$4"
            py="$2"
          >
            {({ open }: { open: boolean }) => (
              <XStack flex={1} jc={'space-between'} style={{ alignItems: 'end' }}>
                <SizableText>Pozostało: 2 dni</SizableText>
                <XStack gap="$2">
                  <SizableText size={'$2'}>27.03.2022</SizableText>
                  <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                    <ChevronDown size="$1" />
                  </Square>
                </XStack>
              </XStack>
            )}
          </Accordion.Trigger>
          <Accordion.Content style={{ marginTop: '2px' }}>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero rem consequuntur expedita qui nostrum
              sapiente dolore perspiciatis harum quasi asperiores.
            </Paragraph>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
export { M_accordionItem }
