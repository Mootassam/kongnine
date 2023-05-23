import React, { useEffect } from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
function Sidebar(props: any) {
  useEffect(() => {}, [props.value]);

  if (props.size !== undefined) {
    console.log(props.value);
  }

  return (
    <div className="app__sidebar">
      <div className="sidebar__form">
        <div className="form__group">
          <label htmlFor=""> Select bank</label>
          <select
            name="bank"
            className="app__select"
            onChange={(e) => props.setvalue(e.target.value)}
          >
            {optionBank.map((item) => (
              <option value={item.value}>{item.name} </option>
            ))}
          </select>
        </div>
        {props.value === "800" && (
          <div className="form__group">
            <label htmlFor=""> Select Size</label>
            <select
              name="bank"
              className="app__select"
              onChange={(e) => props.setSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="large">Large</option>
            </select>
          </div>
        )}

        <div className="form__group">
          <label htmlFor=""> Write the Amount</label>
          <input
            type="text"
            onChange={(e) => props.setAmount(e.target.value)}
            maxLength={7}
          />
        </div>

      
      </div>
      <div className="app__screenshot" onClick={() => props.screenshot()}></div>
    </div>
  );
}

export default Sidebar;
