import XLSX from 'xlsx'
import axios from 'axios'
import {format, eachDayOfInterval} from 'date-fns'

const day = eachDayOfInterval({
    start: new Date(2022, 0, 1),
    end: new Date()
})

const data = []

async function api(day) {
    try {
        const { data: res } = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${format(day,"yyyyMMdd")}`)
        
        res.data.forEach((item,i) => {
            const modifiedDate = format(new Date(item.datetime), 'M')
            data.push({...item, datetime: modifiedDate, data: `=TEXTO(H${i+2}*30;"MMM")`})
        });
    } catch (error) {
        console.log(error.response.data)
    }

}

async function writeExcel() {
    workSheet
    var workSheet = XLSX.utils.json_to_sheet(data);
    var workBook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data')

    XLSX.write(workBook, {bookType: "xlsx", type:"buffer"})
    XLSX.write(workBook, {bookType: "xlsx", type:"binary"})
    XLSX.writeFile(workBook, "table.xlsx")
}

async function run() {
    try {
        for(let i = 0; i < day.length; i++) {
            await api(day[i])
        }
        await writeExcel()
    } catch (error) {
        console.log(error)
    }
}

run()