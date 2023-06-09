import { ReactNode } from "react";

// for passing a string in prop object here.
// interface Props {
//     text: string;
// }

// for passing html code in prop object. for this we need reactnode class
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
      {/* <h1>Bootstrap Alerts</h1> */}
      <div className="alert alert-primary">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
