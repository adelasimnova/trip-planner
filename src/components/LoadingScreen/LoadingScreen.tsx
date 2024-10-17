import "./LoadingScreen.css";
import "boxicons";

export default function LoadingScreen() {
  return (
    <div className="loader-wrapper">
      <box-icon name="loader" animation="spin" size="md" color="#1b540f" />
    </div>
  );
}
