import React from "react";

export const PageCount = (props) => {
    return (

        <div key={props.limit} className="input-group mb-3" style={{ width: "auto" }}>
            <select
                className="form-select"
                id="pageselect"
                aria-label="Default select example"
                value={props.limit}
                onChange={(e) => props.setLimit(e.target.value)}
            >
                <option value="4">4 per Page</option>
                <option value="8" >
                    8 per Page
                </option>
                <option value="16">16 per Page</option>
                <option value="32">32 per Page</option>
                <option value="64">64 per Page</option>
            </select>
        </div>

    );
};
