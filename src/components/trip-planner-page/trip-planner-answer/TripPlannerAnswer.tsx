import "./TripPlannerAnswer.css";
import LoadingIndicator from "../../LoadingScreen/LoadingIndicator.tsx";

interface IProps {
  answer: string;
  answerLoading: boolean;
}

export function TripPlannerAnswer(props: IProps) {
  return (
    <div className="answer-wrapper">
      <div className="loading-wrapper">
        {props.answerLoading && <LoadingIndicator />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.answer }}></div>
    </div>
  );
}
