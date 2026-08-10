import { cn } from "../../lib/utils";
import { type ReactElement } from "react";

interface LeverSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Component = ({ checked, onChange, className }: LeverSwitchProps): ReactElement => {
  return (
    <label className={cn("toggle-container", className)}>
      <input 
        className="toggle-input" 
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <div className="toggle-handle-wrapper">
        <div className="toggle-handle">
          <div className="toggle-handle-knob"></div>
          <div className="toggle-handle-bar-wrapper">
            <div className="toggle-handle-bar"></div>
          </div>
        </div>
      </div>
      <div className="toggle-base">
        <div className="toggle-base-inside"></div>
      </div>
    </label>
  );
};
