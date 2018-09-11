import * as React from 'react'

const SearchForm = ({
  query,
  handleInput,
  handleSubmit
}: {
  query: string
  handleInput: () => Object
  handleSubmit: any
}) => (
  <form onSubmit={handleSubmit}>
    <input onKeyUp={handleInput} defaultValue={query} type="text" />
  </form>
)

export default SearchForm
