import { SelectContainer, SelectInput, OptionTag } from './style'
const Dropdown = ({ data }) => {
  return (
    <SelectContainer>
      <SelectInput name="states">
        {Array.isArray(data) && data.length > 0 ? (
          data.map(state => <OptionTag key={state.capital}>{state.name}</OptionTag>)
        ) : (
          <OptionTag>Select</OptionTag>
        )}
      </SelectInput>
    </SelectContainer>
  )
}

export default Dropdown
