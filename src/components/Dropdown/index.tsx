import { getStates } from '@services/request'
import { SelectContainer, SelectInput, OptionTag } from './style'
import { useCallback, useEffect, useState } from 'react'
const Dropdown = () => {
  const [state, setState] = useState([])
  const callBack = useCallback(async () => {
    const data = await getStates()
    setState(data)
  }, [setState])

  useEffect(() => {
    callBack()
  }, [callBack])

  return (
    <SelectContainer>
      <SelectInput>
        {Array.isArray(state) && state.length > 0 ? (
          state.map(stat => <OptionTag key={stat.capital}>{stat.name}</OptionTag>)
        ) : (
          <OptionTag>Select</OptionTag>
        )}
      </SelectInput>
    </SelectContainer>
  )
}

export default Dropdown
