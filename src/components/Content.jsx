import styled from "styled-components";
import { FlexMixin, FontMixin } from "../style/styled";
import { tag_color,gray } from "../style/styled";


const StyledContent = styled.div`
  ${FlexMixin({ direction: "column", align: "flex-start", gap: 5 })}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${FontMixin({ size: 12 })}
    color: ${tag_color};
    border: 1px solid ${tag_color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${FontMixin({ size: 18, weight: 600 })}
  }
  p {
    ${FontMixin({ size: 12 })}
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyledContent>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContent>
  );
}