import { useSelector } from "react-redux";
import { selectPeople, selectPeopleState } from "../../peopleSlice";
import PersonCardToPeoplePage from "../../common/PersonCardToPeoplePage";
import { usePeopleData } from "../../usePeopleData";
import { Headline, MainArticle, StyledSection } from "./styled";
import { Loading } from "../../common/SearchResultsLoading";
import PageSelector from "../../common/PageSelector";
import { useLocation } from "react-router-dom";

function PeopleList() {
  const params = useLocation();
  const page = new URLSearchParams(params.search).get("page") || 1;

  usePeopleData(page);
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
        <PageSelector page={page} maxPages={500} />
      </StyledSection>
    );
  }
}
export default PeopleList;
