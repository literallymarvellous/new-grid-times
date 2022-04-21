import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryListOpinion>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryListOpinion>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "main-story secondary-stories"
      "main-story secondary-stories"
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 48px 1px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 2fr 1.5fr 1.2fr;
    grid-template-rows: 450px 200px;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletOnly} {
    background: var(--color-gray-100);
  }

  @media ${QUERIES.tabletOnly} {
    padding-left: 24px;
  }
`;

const StoryList = styled.div`
  display: grid;
  background: var(--color-gray-300);
  gap: 1px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: -16px;
  }
`;

const StoryListOpinion = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    background: var(--color-gray-100);
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: -24px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
