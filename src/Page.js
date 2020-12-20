import React from 'react'
// Component
import Heading from "./component/Heading";
import Lead from './component/Lead';
import ChartLineOne from "./component/ChartLineOne";
import ChartBarOne from './component/ChartBarOne';

function Page() {
    return (
        <div>
            <Heading 
                heading = "İşgücü İstatistikleri"
                source = "TÜİK"
                date = "Mayıs 2020"
            />
            <Lead />

            <ChartBarOne />
        </div>
    )
}

export default Page
