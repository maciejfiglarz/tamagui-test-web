import { SizableText, styled } from 'tamagui'

const Paragraph = styled(SizableText, {
  name: 'Paragraph',
  userSelect: 'auto',
})

const M_Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Paragraph>{children}</Paragraph>
}

export { M_Paragraph }
