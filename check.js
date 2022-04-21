var tableData = [
    {
        "first" : "a",
        "last" : "a",
        "rank" : "1",
    },

    // {
    //     "name": "A",
    //     "email": "A email",
    //     "phone": "A phone number",
    //     "avatar": "A avatar",
    //     "id": 1
    // },
    // {
    //     "name": "B",
    //     "email": "B email",
    //     "phone": "B phone number",
    //     "avatar": "B avatar",
    //     "id": 2
    // },
    // {
    //     "name": "C",
    //     "email": "C email",
    //     "phone": "C phone number",
    //     "avatar": "C avatar",
    //     "id": 3
    // },
    // {
    //     "name": "D",
    //     "email": "D email",
    //     "phone": "D phone number",
    //     "avatar": "D avatar",
    //     "id": 4
    // }
]

    var row = <tr>
                    <td>${tableData[1].rank}</td>
                    <td>${tableData[1].first}</td>
                    <td>${tableData[1].last}</td>
              </tr>

    var table = $('#table-body') 
    table.append(row)
