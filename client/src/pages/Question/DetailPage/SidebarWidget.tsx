import { styled } from 'styled-components';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faMessage, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import Tooltip from '../../../components/ui/tooltip/Tooltip';
import { DataType } from '../../../types/question';

const blogData: DataType[] = [
  { icon: faPencil, size: 'sm', content: 'testdfds' },
  { icon: faPencil, size: 'sm', content: 'Stack Exchange Network Outage – June 15, 2023' },
];

const featuredOnMetaData: DataType[] = [
  { icon: faMessage, size: 'sm', content: 'Statement from SO: June 5, 2023 Moderator Action' },
  { icon: faMessage, size: 'sm', content: 'Stack Exchange Network Outage – June 15, 2023' },
  {
    icon: faLayerGroup,
    size: 'sm',
    content: 'Does the policy change for AI-generated content affect users who (want to)',
  },
  {
    icon: faLayerGroup,
    size: 'sm',
    content: 'Temporary policy: Generative AI (e.g., ChatGPT) is banned',
  },
];

const hotMetaPost: DataType[] = [
  {
    postId: 3,
    content: 'How should non-English answers with code be handled in the Low Quality...',
  },
  { postId: 7, content: 'Stack Exchange Network Outage – June 15, 2023' },
  {
    postId: 10,
    content: 'Does the policy change for AI-generated content affect users who (want to)',
  },
  { postId: 27, content: 'Temporary policy: Generative AI (e.g., ChatGPT) is banned' },
];

const renderContent = (data: DataType[]) => {
  return (
    <TooltipContentStyle>
      {data.map((item) => (
        <div>
          <FontAwesomeIcon icon={item.icon as IconProp} size={item.size as SizeProp} />
          <p>{item.content}</p>
        </div>
      ))}
    </TooltipContentStyle>
  );
};

const CustomFiltersTooltipContent = () => {
  return (
    <TooltipContentStyle>
      <div>
        <p>Create a custom filter</p>
      </div>
    </TooltipContentStyle>
  );
};

const SideWidget = () => {
  return (
    <Container>
      <Tooltip title="The Overflow Blog">{renderContent(blogData)}</Tooltip>
      <Tooltip title="The Overflow Blog">{renderContent(featuredOnMetaData)}</Tooltip>
      <Tooltip title="The Overflow Blog">{renderContent(hotMetaPost)}</Tooltip>
      <Tooltip title="Custom Filters" $theme="dark" $marginTop="20">
        <CustomFiltersTooltipContent />
      </Tooltip>
    </Container>
  );
};

const Container = styled.div``;

const TooltipContentStyle = styled.div<{ $theme?: string }>`
  color: #3b4045;
  font-size: 0.813rem;
  & > div {
    display: flex;
    & svg {
      color: #3b4045;
      margin-right: 0.5rem;
    }
  }
  & > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default SideWidget;
