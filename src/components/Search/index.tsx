import { API_KEY } from '@services/index'
import { searchRequest } from '@services/request'
import { FC, ChangeEvent, useState, FormEvent, Fragment } from 'react'
import { SearchContainer, SearchInput, SearchIcon, InputGroup, Form } from './style'
import { SearchTypes } from './types'

const Search: FC<SearchTypes> = ({ setGiphy, setShowModal }) => {
  const [keyword, setKeyword] = useState<string>('')

  const handlechange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setKeyword(value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (keyword.trim() !== '') {
      try {
        const data: any = await searchRequest(API_KEY, keyword)
        setGiphy(data)
        setShowModal(true)
      } catch (error) {
        console.log(error)
      } finally {
      }
    } else {
      return alert('Enter a keyword')
    }
  }
  return (
    <Fragment>
      <SearchContainer>
        <Form role="search" onSubmit={handleSubmit}>
          <InputGroup>
            <SearchInput placeholder="Search..." onChange={handlechange} />
            <SearchIcon />
          </InputGroup>
        </Form>
      </SearchContainer>
    </Fragment>
  )
}

export default Search
