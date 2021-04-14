import React from 'react';
import { node, oneOf, number, oneOfType, string } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import Layout from 'pages/Layout/Layout';

const InputContainer = styled.div`
  display: flex;
  width: 100%;

  input {
    width: ${({ width }) => (width ? calcRem(width) : '100%')};
    height: ${({ height }) => calcRem(height)};
    font-size: ${fontSizes.base};
  }
`;

const Input = ({ id, type, label, children, ...restProps }) => {
  return (
    <InputContainer {...restProps}>
      <Layout.FlexContainer as="label" htmlFor={id}>
        {label}
      </Layout.FlexContainer>
      <input id={id} type={type} placeholder={children} />
    </InputContainer>
  );
};

Input.propTypes = {
  id: string.isRequired,
  type: oneOf(['text', 'password', 'email', 'number']),
  label: oneOfType([string, node]),
  children: string,
  width: number,
  height: number
};

Input.defaultProps = {
  id: 'searchInput',
  type: 'text',
  label: <Icon type="searchWhite" color={colors.white} width={calcRem(30)} />,
  children: 'Service Search'
};

InputContainer.displayName = 'InputContainer';
export default Input;
