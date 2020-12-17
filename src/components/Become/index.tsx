import Card from '@components/Card'
import { items } from '@components/Existing/data'
import { BecomeContainer, BecomeHeading, Paragraph } from './style'

const Become = () => {
  return (
    <BecomeContainer>
      <BecomeHeading>Become an MTN supplier</BecomeHeading>
      <Paragraph>
        If you believe you can join MTN’s vision to make our customers lives a whole lot brighter,
        then click on apply below to fill in the registration form.
      </Paragraph>

      <Card items={items} />
    </BecomeContainer>
  )
}

export default Become
