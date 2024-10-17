import * as React from "react";
import "./TripPlannerForm.css";
import { getTripPlannerAnswer } from "../../../services/ai.ts";
import { TripPlannerAnswer } from "../trip-planner-answer/TripPlannerAnswer.tsx";

export function TripPlannerForm() {
  const [travelGoal, setTravelGoal] = React.useState("");
  const [temperature, setTemperature] = React.useState("");
  const [travelTime, setTravelTime] = React.useState("");
  const [yourLocation, setYourLocation] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [date, setDate] = React.useState("");
  const [kidsChecked, setKidsChecked] = React.useState<boolean>(false);
  const [notes, setNotes] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [answerLoading, setAnswerLoading] = React.useState<boolean>(false);

  const formatFormData = () => {
    return `
        I am looking for ${travelGoal || "not specified"} 
        Weather should be rather ${temperature || "not specified"}
        Travel time by plane or car should be ${travelTime || "not specified"}
        I am travelling from ${yourLocation || "not specified"}
        My budget is ${budget || "not specified"}
        Travel date is ${date || "not specified"}
        Travelling with kids: ${kidsChecked ? "Yes" : "No"}
        My additional notes are: ${notes || "not specified"}
        Please don't include these requirements in response.
        Please write only one matching destination.
        Response should have maximum 500 words and it should be valid html, where the destination name is h3. Each paragraph should be in p tag.
      `;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setAnswerLoading(true);
    const formDataText = formatFormData();
    const result = await getTripPlannerAnswer(formDataText);
    setAnswer(result);
    setAnswerLoading(false);

    console.log(
      "I would like to find vacation destination, that fits my requirements the most. Requirements folows: ",
      formDataText,
    );
  };

  return (
    <div>
      <h1 className="trip-planner-header">Trip Planner</h1>
      <div className="trip-planner-form-wrapper">
        <form className="trip-planner-form" onSubmit={handleSubmit}>
          <label className="trip-planner-form-label" htmlFor="travelGoal">
            Travel goal:
          </label>
          <select
            className="trip-planner-form-dropdown"
            id="travelGoal"
            value={travelGoal}
            onChange={(e) => setTravelGoal(e.target.value)}
          >
            <option value="">-- Choose an option --</option>
            <option value="adventure">Adventure</option>
            <option value="relax">Relax</option>
            <option value="culture">Culture</option>
          </select>
          <label className="trip-planner-form-label" htmlFor="temperature">
            Preferred temperature:
          </label>
          <select
            className="trip-planner-form-dropdown"
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          >
            <option value="">-- Choose an option --</option>
            <option value="colder">Colder</option>
            <option value="warmer">Warmer</option>
            <option value="notImportant">Not important</option>
          </select>
          <label className="trip-planner-form-label" htmlFor="travelTime">
            Travel time:
          </label>
          <select
            className="trip-planner-form-dropdown"
            id="travelTime"
            value={travelTime}
            onChange={(e) => setTravelTime(e.target.value)}
          >
            <option value="">-- Choose an option --</option>
            <option value="under3hours">Under 3 hours</option>
            <option value="under6hours">Under 6 hours</option>
            <option value="under10hours">Under 10 hours</option>
            <option value="notImportant">Not important</option>
          </select>
          {travelTime !== "notImportant" && (
            <div className="trip-planner-form">
              <label
                className="trip-planner-form-label"
                htmlFor="yourLocationInput"
              >
                Your location:
              </label>

              <input
                className="trip-planner-form-input"
                type="text"
                placeholder="Bratislava"
                id="yourLocationInput"
                value={yourLocation}
                onChange={(e) => setYourLocation(e.target.value)}
              />
            </div>
          )}
          <label className="trip-planner-form-label" htmlFor="budget">
            Budget:
          </label>
          <select
            className="trip-planner-form-dropdown"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">-- Choose an option --</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label className="trip-planner-form-label" htmlFor="date">
            Travel date:
          </label>
          <input
            className="trip-planner-form-dropdown"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>

          <label className="trip-planner-form-label" htmlFor="kidsCheckbox">
            Do you travel with kids?
          </label>
          <div className="kids-checkbox">
            <label>Yes</label>
            <input
              className="kids-checkbox-only"
              id="kidsCheckbox"
              checked={kidsChecked}
              type="checkbox"
              onChange={(e) => setKidsChecked(e.target.checked)}
            />
          </div>

          <label className="trip-planner-form-label" htmlFor="notesInput">
            Additional Notes:
          </label>

          <textarea
            className="trip-planner-form-input"
            placeholder="-- Your input here --"
            id="notesInput"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button className="trip-planner-form-button" type="submit">
            Submit
          </button>
        </form>
        <TripPlannerAnswer answer={answer} answerLoading={answerLoading} />
      </div>
    </div>
  );
}
