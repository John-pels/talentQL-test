import { CardContainer, CardColumn, TextWrapper, IconWrapper, Text, SubText } from './style'
import { FC } from 'react'
import { CardTypes } from './types'

const Card: FC<CardTypes> = ({ items }) => {
  return (
    <CardContainer>
      {Array.isArray(items) && items.length > 0
        ? items.map((item, index) => (
            <CardColumn key={index}>
              <TextWrapper>
                <Text>{item.text}</Text>
                <SubText>{item.subText}</SubText>
              </TextWrapper>
              <IconWrapper>{<item.icon size={25} />}</IconWrapper>
            </CardColumn>
          ))
        : null}
    </CardContainer>
  )
}

export default Card
