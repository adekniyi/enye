import React, { useState, useEffect } from 'react';
import Design from './Design';


function Data(props) {



    return(
        <div>
        {
              props.users.map((user) =>
                  {
                    return <Design key ={user.UserName} user = {user}/>
                  }
                )
        }
            {/* <Design users = {users}/> */}
        </div>
    )
}


export default Data;