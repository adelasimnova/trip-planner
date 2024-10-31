import "./LoadingIndicator.css";
import "boxicons";

export default function LoadingIndicator() {
  return (
    <div className="loader-wrapper">
      <box-icon name="loader" animation="spin" size="md" color="#1b540f" />
    </div>
  );
}
