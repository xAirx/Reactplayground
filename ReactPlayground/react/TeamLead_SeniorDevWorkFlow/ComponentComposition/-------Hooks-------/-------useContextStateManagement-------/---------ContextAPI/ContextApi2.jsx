


https://www.pragimtech.com/blog/reactjs/component-communication-using-context-part-2/



///////////////////////////////// EmployeeComponent.js /////////////////////////////////////

import React, { useContext } from "react";
/* import Salary from "./SalaryComponent";
*/ import employeeContext from "./App";
// Creating our context
import Location from "./LocationComponent";
import Salary from "./SalaryComponent";

function Employee () {
    let context = useContext(employeeContext);
    console.log("context", context);
    return (
        <>
            <h2>Employeecomponent </h2>
            <p>
                <label>
                    Employee ID: <b> {context.Id}</b>
                </label>
            </p>
            <p>
                <label>
                    Employee Name: <b> {context.Name}</b>
                </label>
            </p>
            <Salary />
            <Location />
        </>
    );
}

/////////////////////////////////////////////// Location Component.js ////////////////////////////////////

import React, { useContext } from "react";
/* import Salary from "./SalaryComponent";
*/ import employeeContext from "./App";
// Creating our context
function Location () {
    let context = useContext(employeeContext);
    console.log("context", context);


    // Set function to call updateemployee that is mapped in app.js
    // Changing state
    function changeEmploymentType () {
        context.updateEmployee({ ...context, EmploymentType: "Permanent" });
    }
    function changeEmploymentTypeTemporary () {
        context.updateEmployee({ ...context, EmploymentType: "Temporary" });
    }
    function changeEmploymentName (e) {
        context.updateEmployee({ ...context, Name: e });
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log("handlesubmit pressed");
    };
    return (
        <div>
            <h2>Location Component...</h2>
            <p>
                <label>
                    Employee ID : <b>{context.Id}</b>
                </label>
            </p>
            <p>
                <label>
                    Employee Name : <b>{context.Name}</b>
                </label>
            </p>
            <p>
                <label>
                    Employee Salary : <b>{context.Salary}</b>
                </label>
            </p>
            <p>
                <label>
                    Employee EmploymentType : <b>{context.EmploymentType}</b>
                </label>
            </p>
            <employeeContext.Consumer>
                {value =>
                    value.EmploymentType === "Permanent" ? (
                        <Permanent />
                    ) : (
                        <Contract />
                    )
                }
            </employeeContext.Consumer>
            <button onClick={changeEmploymentType}>Make Permanent</button>
            <button onClick={changeEmploymentTypeTemporary}>Make Temporary</button>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={context.name}
                        onChange={e => changeEmploymentName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Location;




////////////////////////////////// Salary Component.js //////////////////////////////


import React, { useContext } from "react";
/* import Salary from "./SalaryComponent";
*/ import employeeContext from "./App";


// Creating our context
function Salary () {


    let context = useContext(employeeContext);

    function updateSalary (e) {
        context.updateEmployee({ ...context, Salary: e });
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log("handlesubmit pressed");
    };
    return (
        <div>
            <h2>Salary Component...</h2>
            <p>
                <label>
                    Employee ID : <b>{context.Id}</b>
                </label>
            </p>
            <p>
                <label>
                    Employee Salary : <b>{context.Salary}</b>
                </label>
            </p>
            <button onClick={updateSalary}>Update</button>
            <form onSubmit={handleSubmit}>
                <label>
                    New Salary:
                    <input
                        type="text"
                        value={context.name}
                        onChange={e => updateSalary(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Salary;
