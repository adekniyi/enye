import React, { useState, useEffect } from 'react';


function Design(props) {

   // const { FirstName, LastName, Gender, CreditCardType, Email, UserName,PaymentMethod } = props.users
    return(
    <div>
      <div>
      </div>
            {/* <h1>{props.user.FirstName}</h1> */}
      <div class="dataCard">
        <div class="teacher flex">
          <div class="centered">
            <div>
              <h4 class="paragraphFade">Name</h4>
              <p class="title">{props.user.FirstName} {props.user.LastName}</p>
            </div>
          </div>
        </div>
        <div class="centered">
          <div>
            <h4 class="paragraphFade">Email</h4>
            <p class="title">{props.user.Email}</p>
          </div>
        </div>
        <div class="centered">
          <div>
            <h4 class="paragraphFade">UserName</h4>
            <p>{props.user.UserName}</p>
          </div>
        </div>
        <div class="centered">
          <div>
            <h4 class="paragraphFade">Gender</h4>
            <p class="title">{props.user.Gender}</p>
          </div>
        </div>
        <div class="centered">
          <div>
            <h4 class="paragraphFade">CreditCardType</h4>
            <p>{props.user.CreditCardType}</p>
          </div>
        </div>
        <div class="centered">
          <div>
            <h4 class="paragraphFade">PaymentMethod</h4>
            <p>{props.user.PaymentMethod}</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Design;