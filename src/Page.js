import React from 'react'
// Component
import Heading from "./component/Heading";
import Lead from './component/Lead';
import ChartLineOne from "./component/ChartLineOne";
import ChartBarOne from './component/ChartBarOne';
import data from "./data1";

function Page() {
    return (
        <div>
            <Heading 
                heading = "İşgücü İstatistikleri"
                source = "TÜİK"
                date = "Mayıs 2020"
            />
            
            <Lead 
                h5 = "İşsizlik oranı %12,7 seviyesinde gerçekleşti."
                p = "Türkiye genelinde 15 ve daha yukarı yaştakilerde işsiz sayısı 2020 yılı Eylül döneminde geçen yılın aynı dönemine göre 550 bin kişi azalarak 4 milyon 16 bin kişi oldu. İşsizlik oranı 1,1 puanlık azalış ile %12,7 seviyesinde gerçekleşti. Tarım dışı işsizlik oranı 1,5 puanlık azalış ile %14,9 oldu."
            />

            <ChartBarOne 
                data = {data}
                xaxis = "Aylar"
                yaxis = "Oran"

            />
        </div>
    )
}

export default Page
