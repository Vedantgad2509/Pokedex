import React, { useState } from 'react'
import {Link} from "react"


export default function Search() {
    const[sear,setsear]=useState('');
    const handleSearch=(e)=>{
        setsear(e.target.value);
    }
  return (
    <div><input type="text" name="sear" value={sear} onChange={handleSearch} placeholder='Search by ID or Name'/>
    {/* <Link to= {`/?q=${sear}`}>
    Search
    </Link> */}
    <button>
        Search
    </button>
    </div>
  )
}
