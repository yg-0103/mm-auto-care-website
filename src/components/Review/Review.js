import Icon from 'components/Icon/Icon';
import { object } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem, device, fontSizes } from 'theme/theme';

const StyledReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: ${fontSizes.xl};
  & > div {
    display: inline;
  }

  @media only screen and (max-width: 1200px) {
    p {
      font-size: ${fontSizes.xl};
      max-width: ${calcRem(500)};
      margin-bottom: ${calcRem(50)};
    }

    span {
      font-size: ${fontSizes.lg};
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: ${fontSizes.base};
      max-width: ${calcRem(500)};
      margin-bottom: ${calcRem(50)};
    }

    span {
      font-size: ${fontSizes.small};
    }
  }
`;

const StyledReviewContent = styled.p`
  width: 100%;
  margin: auto;
  color: ${({ colors }) => colors.main};
  line-height: ${calcRem(45)};
  /* margin-bottom: ${calcRem(50)}; */
  height: ${calcRem(350)};

  @media only screen and (max-width: 488px) {
    height: ${calcRem(450)};
  }
`;

const StyledReviewInfo = styled.span`
  display: block;
  /* margin-bottom: ${calcRem(5)}; */
  line-height: ${calcRem(40)};
  color: ${({ colors }) => colors.sub};
  font-size: ${fontSizes.lg};
  span + span {
    margin-bottom: ${calcRem(15)};
  }
`;

const Review = ({ content, colors }) => {
  return (
    <StyledReviewContainer className="review">
      <StyledReviewContent colors={colors}>
        {content.review}
      </StyledReviewContent>
      {Array(content.star)
        .fill()
        .map((_, idx) => (
          <Icon key={idx} type="star" color="yellow" />
        ))}
      <StyledReviewInfo aria-label="writer" colors={colors}>
        {content.name}
      </StyledReviewInfo>
      <StyledReviewInfo aria-label="model name" colors={colors}>
        {content.model}
      </StyledReviewInfo>
    </StyledReviewContainer>
  );
};

Review.propTypes = {
  content: object.isRequired,
  colors: object
};

Review.defaultProps = {
  content: {},
  colors: { main: colors.black, sub: colors.black }
};

StyledReviewContainer.displayName = 'StyledReviewContainer';
StyledReviewContent.displayName = 'StyledReviewContent';
StyledReviewInfo.displayName = 'StyledReviewInfo';

export default Review;
