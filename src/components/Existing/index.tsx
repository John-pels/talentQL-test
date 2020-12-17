import React from 'react'
import Card from '@components/Card'
import { ExistingContainer, ExisitingHeading, Paragraph } from './style'
import { Contexts, items } from './data'

const Existing = () => {
  return (
    <ExistingContainer>
      <ExisitingHeading>Existing MTN supplier</ExisitingHeading>
      <>
        {Array.isArray(Contexts) && Contexts.length > 0
          ? Contexts.map((context, index) => <Paragraph key={index}>{context}</Paragraph>)
          : null}
      </>
      <Card items={items} />
    </ExistingContainer>
  )
}

export default Existing
