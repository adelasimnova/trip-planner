import "./TripPlannerAnswer.css";
import LoadingScreen from "../../LoadingScreen/LoadingScreen.tsx";

interface IProps {
  answer: string;
  answerLoading: boolean;
}

export function TripPlannerAnswer(props: IProps) {
  console.log(props.answer);

  return (
    <div className="answer-wrapper">
      <div className="loading-wrapper">
        {props.answerLoading && <LoadingScreen />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.answer }}></div>
    </div>
  );
}
