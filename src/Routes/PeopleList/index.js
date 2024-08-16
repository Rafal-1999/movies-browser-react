import { useSelector } from "react-redux";
import { selectPeople, selectPeopleState } from "../../peopleSlice";
import PersonCardToPeoplePage from "../../common/PersonCardToPeoplePage";
import { usePeopleData } from "../../usePeopleData";
import { Headline, MainArticle, StyledSection } from "./styled";
import { Loading } from "../../common/SearchResultsLoading";

function PeopleList() {
  usePeopleData();
  const people = useSelector(selectPeople);
  const state = useSelector(selectPeopleState);

  if (state === "loading") {
    return <Loading/>
  } else if (Array.isArray(people)) {
    return (
      <StyledSection>
        <Headline> Popular people </Headline>
        <MainArticle>
          {people.map((person) => {
            return (
              <PersonCardToPeoplePage
                image={"https://image.tmdb.org/t/p/h632" + person.profile_path}
                title={person.name}
                id={person.id}
              />
            );
          })}
        </MainArticle>
      </StyledSection>
    );
  }
}
export default PeopleList;
