import React, { useState, useEffect, useContext } from "react";

export const Registro = () => (
    <div className="container">
        <div className="">
            <div className="col-4">
                <p className="card-text">First_name:</p>
                <input
                    onChange={actions.signupData}
                    name="first_name"
                    type="text"
                    className="form-control"
                    placeholder="first_name"
                    aria-label="first_name"
                />
            </div>
        </div>
    </div>
);