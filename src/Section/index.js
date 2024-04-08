import { StyledBody, StyledHeader, StyledSection, StyledTitle} from "./styled";

const Section = ({ title, body, extraHeaderButtons }) => (
    <StyledSection>
        <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
            {extraHeaderButtons}
        </StyledHeader>
        <StyledBody>
            {body}
        </StyledBody>
    </StyledSection>
);

export default Section;