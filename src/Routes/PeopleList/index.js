import { useSelector } from "react-redux";
import { selectPeople } from "../../peopleSlice";
import PersonCardToPeoplePage from "../../common/PersonCardToPeoplePage";
import { usePeopleData } from "../../usePeopleData";
import { Headline, MainArticle, StyledSection } from "./styled";

function PeopleList() {
  usePeopleData();
  const people = useSelector(selectPeople);

  if (Array.isArray(people)) {
    return (
      <StyledSection>
        <Headline> Popular people </Headline>
        <MainArticle>
          {people.map((person) => {
            return (
              <PersonCardToPeoplePage
                image={"https://image.tmdb.org/t/p/h632" + person.profile_path}
                title={person.name}
              />
            );
          })}
        </MainArticle>
      </StyledSection>
    );
  }
}
export default PeopleList;
