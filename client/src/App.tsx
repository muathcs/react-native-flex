import { useEffect, useState } from "react";
import "./App.css";
import Passcode from "./components/Passcode";
import StudyCards from "./components/StudyCards";
import StopLight from "./components/StopLight";
import WackAMole from "./components/wack-a-mole";
import EventForm from "./components/EventForm";
import BankSearchFilter from "./components/BankSearchFilter";
import TaskManager from "./components/TaskManager";
import BankSearchFilterCopy from "./components/BankSearchFilterCopy";
import CountriesPagecopy from "./components/CountriesPagecopy";
import CountryCapital from "./components/CountryCapital";
import CountryCapitalcopy from "./components/CountryCapitalcopy";
import { ColorStatus } from "./components/Edify";

// app!
function App() {
  const countryCapitalData = {
    "United States": "Washington D.C.",
    France: "Paris",
    Germany: "Berlin",
    Japan: "Tokyo",
    Libya: "Tripoli",
    Canada: "Ottawa",
  };

  return (
    <>
      <ColorStatus />
      {/* <CountryCapitalcopy data={countryCapitalData} /> */}
    </>
  );
}

export default App;
