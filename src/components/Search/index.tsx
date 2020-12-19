import { SearchContainer, SearchInput, SearchIcon, InputGroup, Form } from './style'
const Search = () => {
  return (
    <SearchContainer>
      <Form>
        <InputGroup>
          <SearchInput placeholder="Search..." />
          <SearchIcon />
        </InputGroup>
      </Form>
    </SearchContainer>
  )
}

export default Search
