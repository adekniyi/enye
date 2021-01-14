import React, { useState, useEffect } from 'react';


function Design(props) {

   // const { FirstName, LastName, Gender, CreditCardType, Email, UserName,PaymentMethod } = props.users
    return(
    <div>
      <div>
      </div>
            {/* <h1>{props.user.FirstName}</h1> */}
      <div className="dataCard">
        <div className="teacher flex">
          <div className="centered">
            <div>
              <h4 className="paragraphFade">Name</h4>
              <p className="title">{props.user.FirstName} {props.user.LastName}</p>
            </div>
          </div>
        </div>
        <div className="centered">
          <div>
            <h4 className="paragraphFade">Email</h4>
            <p className="title">{props.user.Email}</p>
          </div>
        </div>
        <div className="centered">
          <div>
            <h4 className="paragraphFade">UserName</h4>
            <p>{props.user.UserName}</p>
          </div>
        </div>
        <div className="centered">
          <div>
            <h4 className="paragraphFade">Gender</h4>
            <p className="title">{props.user.Gender}</p>
          </div>
        </div>
        <div className="centered">
          <div>
            <h4 className="paragraphFade">CreditCardType</h4>
            <p>{props.user.CreditCardType}</p>
          </div>
        </div>
        <div className="centered">
          <div>
            <h4 className="paragraphFade">PaymentMethod</h4>
            <p>{props.user.PaymentMethod}</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Design;