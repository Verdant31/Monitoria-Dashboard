import { SearchBarContainer, SearchBarInput } from './styles'
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
  setFilter: (value: string) => void
}

const SearchBar = ({ setFilter }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchIcon
        sx={{
          position: 'absolute',
          color: 'black',
          paddingTop: '0.4rem',
          paddingLeft: '0.8rem',
        }}
      />
      <SearchBarInput
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Pesquise por nome de disciplina..."
      />
    </SearchBarContainer>
  )
}
export default SearchBar
