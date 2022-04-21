import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDesktop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupDesktop>
        <Logo />
        <ActionGroupLink>
          <Button>Subscribe</Button>
          <Link>Already a subscriber?</Link>
        </ActionGroupLink>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;

    @media ${QUERIES.laptopAndUp} {
      color: var(--color-offblack);
    }
  }
`;

const ActionGroupDesktop = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex: 2;
  }
`;

const ActionGroupLink = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    flex: 2;
    display: grid;
    gap: 8px;
    justify-content: end;
    justify-items: center;
  }
`;

const Link = styled.a`
  color: var(--color-offblack);
  text-decoration: underline;
  font-family: var(--font-family-serif);
  font-weight: var(--font-weight-normal);
  font-size: calc(14 / 16 * 1rem);
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    align-items: baseline;
  }
`;

export default Header;
