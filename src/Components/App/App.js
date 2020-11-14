import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import "./App.scss";

function App() {
  const [booksFound, setBooksFound] = useState(false);
  const [searchingTitle, setSearchingTitle] = useState("");
  const [searchingAuthor, setSearchingAuthor] = useState("");
  const [volumeType, setVolumeType] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [maxResults, setMaxResults] = useState(10);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (maxResults <= 35) {
        let scrolled = Math.ceil(window.scrollY);
        let scrollable =
          document.documentElement.scrollHeight - window.innerHeight;

        if (scrolled === scrollable) {
          setMaxResults(maxResults + 5);
        }
      }
    });
  }, [maxResults]);

  const prepareFetchLink = () => {
    const APIKey = "AIzaSyCEUjLfNCaKT3fqgq1WeNqxxVwb14bhDLI";
    const parametersObject = {
      intitle: searchingTitle,
      inauthor: searchingAuthor,
    };
    let fetchingLink = `https://www.googleapis.com/books/v1/volumes?q=`;

    for (const parameter in parametersObject) {
      if (parametersObject[parameter] !== "") {
        fetchingLink += `+${parameter}:${parametersObject[parameter]}`;
      }
    }
    if (volumeType !== "all") {
      fetchingLink += `&printType=${volumeType}`;
    }
    fetchingLink += `&maxResults=40&key=${APIKey}`;
    console.log(fetchingLink);

    return fetchingLink;
  };

  const findBooks = () => {
    setMaxResults(10);
    setBooksFound(false);
    setIsLoading(true);
    fetch(prepareFetchLink())
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.items);
        setIsLoading(false);
        setBooksFound(data.items);
      });
  };
  return (
    <div className="app">
      <Header
        findBooks={findBooks}
        setBooksFound={setBooksFound}
        searchingTitle={searchingTitle}
        setSearchingTitle={setSearchingTitle}
        searchingAuthor={searchingAuthor}
        setSearchingAuthor={setSearchingAuthor}
        setMaxResults={setMaxResults}
        volumeType={volumeType}
        setVolumeType={setVolumeType}
      />
      {booksFound && <MainContent books={booksFound} maxResults={maxResults} />}
      {isLoading && <LoadingScreen books={booksFound} />}
    </div>
  );
}

export default App;
