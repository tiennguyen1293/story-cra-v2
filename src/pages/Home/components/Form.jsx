import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/logo.svg';
import IconSearch from '../assets/icon-search.svg';
import messages from '../shared/messages';

const WrapperForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 67rem;
  padding: 6rem 10rem;
  background: ${props => props.theme.blue};
  transition: all 0.2s ease;

  ${props => (props.startSearch
    ? 'margin-bottom: 8rem;background: transparent; max-width: none; padding: 0; flex-direction: row; align-items: center'
    : '')};
`;

const WrapperTop = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperLogo = styled.img`
  width: 5.6rem;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0;
  font-size: 3.6rem;
`;

const WrapperInput = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  transition: margin 0.2s ease;
  ${props => (props.startSearch ? 'flex: 1; margin-top: 0; margin-bottom: 0; margin-left: 6.4rem' : '')};
`;

const TitleInput = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 46rem;
  padding: 1.3rem 2rem 1.3rem 5.6rem;
  font-size: 2rem;
  color: ${props => props.theme.black};
  border: none;
  border-radius: 2.25rem;
  box-shadow: 0 1rem 2rem 0 rgba(208, 223, 232, 0.32);
  -webkit-appearance: none;
  -webkit-appearance: searchfield;
  outline-offset: 0;
  background: ${props => props.theme.white} url(${IconSearch}) no-repeat 1.8rem 50%;

  :focus,
  :active {
    outline: none;
  }

  ::-webkit-input-placeholder {
    opacity: 0.35;
  }
`;

const Button = styled.button`
  position: absolute;
  left: -99999px;
  opacity: 0;
`;

const WrapperBottom = styled.div`
  display: flex;
  align-items: center;
`;

const LinkMe = styled.a`
  color: ${props => props.theme.black};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

class Form extends React.Component {
  render() {
    const {
      intl: { formatMessage },
      submit,
      handleChange,
      startSearch,
    } = this.props;

    return (
      <WrapperForm onSubmit={submit} startSearch={startSearch}>
        <WrapperTop>
          <WrapperLogo src={Logo} alt="logo" />
          <Title>{formatMessage(messages.title)}</Title>
        </WrapperTop>
        <WrapperInput startSearch={startSearch}>
          {!startSearch && <TitleInput>{formatMessage(messages.content)}</TitleInput>}
          <Input
            type="search"
            placeholder="Enter something..."
            required
            minLength="2"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onChange={handleChange}
          />
          <Button type="submit" />
        </WrapperInput>
        <WrapperBottom>
          <span>{formatMessage(messages.linkProfile)}</span>
          <span>&nbsp;</span>
          <LinkMe
            href="https://github.com/tiennguyen1293/story-cra-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formatMessage(messages.author)}
          </LinkMe>
        </WrapperBottom>
      </WrapperForm>
    );
  }
}

export default Form;
