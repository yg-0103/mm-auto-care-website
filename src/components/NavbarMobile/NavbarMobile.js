import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import { array } from 'prop-types';
import NavbarMobileItem from 'components/NavbarMobileItem/NavbarMobileItem';

const StyledContainer = styled.ul`
  max-width: 100%;
  margin: 0 ${calcRem(15)};
`;

const NavbarMobile = ({ NavItems }) => {
  return (
    <StyledContainer>
      {NavItems.map(item => {
        return (
          <NavbarMobileItem
            id={item.id}
            value={item.value}
            type={item.type}
            to={item.to}
          ></NavbarMobileItem>
        );
      })}
    </StyledContainer>
  );
};

NavbarMobile.propTypes = {
  NavItems: array.isRequired
};

NavbarMobile.defaultProps = {
  NavItems: [
    {
      id: 'nav_1',
      value: 'HOME',
      type: 'nav',
      to: '/home'
    },
    {
      id: 'nav_2',
      value: 'ABOUT',
      type: 'nav',
      to: '/about-us'
    },
    {
      id: 'nav_3',
      value: 'SERVICES',
      type: 'nav',
      to: '/main-services'
    },
    {
      id: 'service_1',
      value: 'Ceramic Coating',
      type: 'service',
      to: '/'
    },
    {
      id: 'coating_1',
      value: 'Ceramic Pro',
      type: 'serviceDetail',
      to: '/'
    },
    {
      id: 'coating_2',
      value: 'IGL Coatings',
      type: 'serviceDetail',
      to: '/'
    },
    {
      id: 'service_2',
      value: 'Paint Protection Film',
      type: 'service',
      to: '/paint-protection'
    },
    {
      id: 'service_3',
      value: 'Window Tinting',
      type: 'service',
      to: '/window-tinting'
    },
    {
      id: 'service_4',
      value: 'Detailing & Paint Correction',
      type: 'service',
      to: '/detailing-and-correction'
    },
    {
      id: 'service_5',
      value: 'Wheel & Tire',
      type: 'service',
      to: '/wheel-and-tire'
    },
    {
      id: 'nav_4',
      value: 'GET A QUOTE',
      type: 'nav',
      to: '/get-a-quote'
    },
    {
      id: 'nav_5',
      value: 'CONTACT US',
      type: 'nav',
      to: '/contact-us'
    }
  ]
};

NavbarMobile.displayName = 'NavbarMobile';
export default NavbarMobile;
