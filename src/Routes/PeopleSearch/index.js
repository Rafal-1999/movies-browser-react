import { useSelector } from "react-redux";
import { selectPeople, selectPeopleState } from "../../peopleSlice";
import PersonCardToPeoplePage from "../../common/PersonCardToPeoplePage";
import { useSearchPeopleData } from "../../useSearchPeopleData";
import { Headline, MainArticle, StyledSection } from "./styled";
import { useLocation } from "react-router-dom";
import { Loading } from "../../common/SearchResultsLoading";
import { NoResults } from "../NoResults";

function PeopleList() {
  const params = useLocation();
  const query = new URLSearchParams(params.search).get("query");

  useSearchPeopleData(query);
  const people = useSelector(selectPeople);
  const state = useSelector(selectPeopleState);

  if (state === "loading") {
    return <Loading />;
  } else if (Array.isArray(people)) {
    return (
      <StyledSection>
        {people.length === 0 ? (
          <NoResults query={query} />
        ) : (
          <>
            <Headline> Popular people </Headline>
            <MainArticle>
              {people.map((person) => {
                return (
                  <PersonCardToPeoplePage
                    image={
                      "https://image.tmdb.org/t/p/h632" + person.profile_path
                    }
                    title={person.name}
                    id={person.id}
                  />
                );
              })}
            </MainArticle>
          </>
        )}
      </StyledSection>
    );
  }
}
export default PeopleList;
