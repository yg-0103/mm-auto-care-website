import React from 'react';
import { object, func } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, fontSizes, colors, calcRem } from 'theme/theme';
import { Button, Icon } from 'components';
import useViewSize from 'hooks/useViewSize';

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  padding: ${calcInterval([0, 40, 35])};
  font-weight: 400;
  overflow: hidden;
  position: relative;
  border: none;

  &:hover {
    border: 0;
    padding: ${calcInterval([0, 40, 35])};

    path {
      fill: #fff;
    }
  }

  h3 {
    font-size: ${fontSizes.lg};
    padding: ${calcInterval([15, 0, 0])};
    text-align: center;
    font-weight: bold;
    white-space: nowrap;
  }

  p {
    border-top: ${`1px solid ${colors.lightGray}`};
    margin-top: ${calcRem(15)};
    padding-top: ${calcRem(10)};
    font-size: ${fontSizes.lg};
    color: ${colors.lightGray};
    line-height: ${calcRem(30)};
  }

  a {
    padding: 0;
  }

  div {
    position: absolute;
    top: 50%;
    right: ${calcRem(-25)};
    transform: translate3d(-50px, -50%, 0);
  }
`;

const AccordionItemContainer = styled.li`
  max-width: ${calcRem(310)};
`;

const variants = mobile => ({
  visible: {
    color: colors.white,
    backgroundColor: colors.redMain,
    height: 'auto',
    opacity: 0.8,
    transition: { duration: 0.5, type: 'tween' }
  },
  hidden: {
    color: colors.black,
    backgroundColor: colors.white,
    height: mobile ? calcRem(37) : calcRem(46),
    opacity: 1,
    transition: { duration: 0.5, type: 'tween' }
  }
});

const AccordionItem = ({ item, onClick }) => {
  const { mobile } = useViewSize();

  return (
    <AccordionItemContainer>
      <StyledButton
        fullwidth={mobile}
        mode="link"
        onClick={() => onClick(item.id)}
        to={item.active ? '/home' : '/'}
        variants={variants(mobile)}
        animate={item.active ? 'visible' : 'hidden'}
      >
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        {item.active && (
          <Icon
            title="rigthArrow Link"
            type="rightArrow"
            color={colors.white}
            width="16"
            height="28"
          />
        )}
      </StyledButton>
    </AccordionItemContainer>
  );
};

AccordionItem.propTypes = {
  item: object.isRequired,
  onClick: func
};

AccordionItem.defaultProps = {
  item: {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: true
  }
};

AccordionItemContainer.displayName = 'AccordionItemContainer';
export default React.memo(AccordionItem);
