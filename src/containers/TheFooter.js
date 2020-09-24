import React from "react"
import { CFooter } from "@coreui/react"

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <button target="_blank" rel="noopener noreferrer" style={{border:"none", color:"gray"}}>Stock Tracker</button>
        <span className="ml-1">&copy; 2020 team-235.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <button target="_blank" rel="noopener noreferrer" style={{border:"none", color:"gray"}}>Stock Tracker for Build4SDG</button>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
