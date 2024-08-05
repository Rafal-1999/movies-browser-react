import { useSelector } from "react-redux";
import { selectPeople } from "../../peopleSlice";
import PersonCardToPeoplePage from "../../common/PersonCardToPeoplePage";
import { usePeopleData } from "../../usePeopleData";
import { Headline, MainArticle, StyledSection } from "./styled";

function PeopleList() {
  usePeopleData();
  const people = useSelector(selectPeople);

  return (
    <StyledSection>
      <Headline> Popular people </Headline>
      <MainArticle>
        {people.map((person) => {
          return (
            <PersonCardToPeoplePage
              imageURL={"https://image.tmdb.org/t/p/w500" + person.poster_path}
              title={person.title}
            />
          );
        })}
      </MainArticle>
    </StyledSection>
  );
}
export default PeopleList;
