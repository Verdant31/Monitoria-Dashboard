import { SearchBarContainer, SearchBarInput } from "./styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon sx={{position: 'absolute', color: 'black', paddingTop: '0.4rem', paddingLeft: '0.8rem'}}/>
      <SearchBarInput placeholder="Pesquise por um nome ou disciplina..."/>
    </SearchBarContainer>
  )
}
export default SearchBar;