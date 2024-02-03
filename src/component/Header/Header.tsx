import coverSmall from './../../assets/CoverSmall.png'
import coverMedium from './../../assets/Cover-1280.png'
import coverLarge from './../../assets/cover.png'
import { HeaderContainer } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <figure className="container-banner-header">
        <img
          className="img-banner-header"
          srcSet={`${coverSmall} 375w, ${coverMedium} 768w, ${coverLarge} 1280w`}
          sizes="(max-width: 300px) 300px, (max-width: 768px) 750px, 100vw"
          alt="banner github blog"
          src={coverLarge}
        />
      </figure>
    </HeaderContainer>
  )
}
