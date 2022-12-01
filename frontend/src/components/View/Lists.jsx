import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Lists(){

    const [selected, setSelected] = useState('Overview')
    return(       
        <div className="viewList">
            <nav>
                <Link to='overview' 
                    style={{textDecoration:selected!=='Overview'&&'none'}}
                    onClick={() => setSelected('Overview')}>Overview
                </Link><br/>
                <Link to='packages' 
                    style={{textDecoration:selected!=='Packages'&&'none'}}
                    onClick={() => setSelected('Packages')}>Packages
                </Link><br/>
                <Link to='taskItems' 
                    style={{textDecoration:selected!=='Works'&&'none'}}
                    onClick={() => setSelected('Works')}>Works
                </Link><br/>
                <Link to='features' 
                    style={{textDecoration:selected!=='Features'&&'none'}}
                    onClick={() => setSelected('Features')}>Features
                </Link>
            </nav>
            <Outlet />
        </div>
    )

}

export default Lists;