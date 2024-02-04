import { Card } from '../../component/Card/Card'
import { Profile } from '../../component/Profile/Profile'
import { Search } from '../../component/Search/Search'
import { HomeContainer } from './style'

const Home = () => {
  return (
    <HomeContainer>
      <Profile />
      <Search />
      <Card />
    </HomeContainer>
  )
}

export default Home
