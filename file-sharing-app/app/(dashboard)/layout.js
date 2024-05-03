"use client"
import { useState } from "react"
import SideNav from "../_components/SideNav"
import TopHeader from "../_components/TopHeader"

const layout = ({ children }) => {
    const [sidenav, setsidenav] = useState(false)
    return (
        <div>
            <div className=" hidden h-full md:flex w-64 flex-col fixed inset-0 z-50">
                {sidenav ? <SideNav /> : ""}
            </div>
            <div className="md:ml-64">
                <TopHeader setFn={setsidenav} />
                {children}
            </div>
        </div>
    )
}

export default layout