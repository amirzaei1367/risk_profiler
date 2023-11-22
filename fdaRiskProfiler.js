
document.getElementById('load_file_picker').addEventListener('change', handleFileSelect);

// define search function that send the query to a server with ajax and get the result
function handleFileSelect() {
    console.log('handleFileSelect() called');
    const input = document.getElementById('load_file_picker');
    const file = input.files[0];
    window.globalVariableFile = file;

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const contents = e.target.result;
            const lines = contents.split('\n');

            const tableBody = document.getElementById('load_table_body')
            tableBody.innerHTML = ''; // Clear existing table data

            for (let i = 1; i < lines.length; i++) {
                const dataRow = lines[i].split(',');
                // console.log(dataRow);
                const line = i;
                const creditScore = 0;

                // Create a new row in the table
                const newRow = document.createElement('tr');

                // Populate each cell in the row
                newRow.innerHTML = `
                    <td>${line}</td>
                    <td>${dataRow[0]}</td>
                    <td>${dataRow[1]}</td>
                    <td>${dataRow[2]}</td>
                    <td>${dataRow[3]}</td>
                    <td>${dataRow[4]}</td>
                    <td>${dataRow[5]}</td>
                    <td>${dataRow[6]}</td>
                    <td>${dataRow[7]}</td>
                    <td>${dataRow[8]}</td>
                    <td>${dataRow[9]}</td>
                    <td>${dataRow[10]}</td>
                `;

                // Append the new row to the table body
                tableBody.appendChild(newRow);
            }

        };

        reader.readAsText(file);
        document.getElementById('load_file_picker').value = null;
    }
    
}

//need to be modify, is not working properly
function process() {
    console.log('process() called');

    file = window.globalVariableFile;

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const contents = e.target.result;
            const lines = contents.split('\n');

            const table_bodies = [document.getElementById('track_score_table_body'),
                                  document.getElementById('media_score_table_body'),
                                  document.getElementById('adjacency_score_table_body'),
                                  document.getElementById('credit_score_table_body'),
                                  document.getElementById('total_score_table_body')
                                 ]
                                
            for (let j = 0; j < table_bodies.length; j++) {
                const tableBody = table_bodies[j];
                tableBody.innerHTML = ''; // Clear existing table data

                for (let i = 1; i < lines.length; i++) {
                    const dataRow = lines[i].split(',');
                    // console.log(dataRow);
                    const line = i;
                    const creditScore = 0;

                    // Generate a random color from the available options
                    const randomColor1 = ['lightgreen','yellow',  '#FFCCCb'][Math.floor(Math.random() * 3)];
                    const randomColor2 = ['lightgreen','yellow',  "#FFCCCb"][Math.floor(Math.random() * 3)];
                    const randomColor3 = ['lightgreen','yellow',  '#FFCCCb'][Math.floor(Math.random() * 3)];


                    // Create a new row in the table
                    const newRow = document.createElement('tr');

                    // Populate each cell in the row
                    if (j == 4) {
                        newRow.innerHTML = `
                        <td style="background-color: ${randomColor1}"> <a href="/fdaCreditScoreDetail/${line}" target="_blank">${line}</a></td>
                        <td>${dataRow[0]}</td>
                        <td>${dataRow[1]}</td>
                        <td>${dataRow[2]}</td>
                        <td>${dataRow[3]}</td>
                        <td>${dataRow[4]}</td>
                        <td>${dataRow[5]}</td>
                        <td>${dataRow[6]}</td>
                        <td>${dataRow[7]}</td>
                        <td>${dataRow[8]}</td>
                        <td>${dataRow[9]}</td>
                        <td>${dataRow[10]}</td>
                        `;

                    } else {
                        newRow.innerHTML = `
                            <td>${line}</td>
                            <td style="background-color: ${randomColor1}">${dataRow[0]}</td>
                            <td style="background-color: ${randomColor3}">${dataRow[1]}</td>
                            <td style="background-color: ${randomColor3}">${dataRow[2]}</td>
                            <td style="background-color: ${randomColor1}">${dataRow[3]}</td>
                            <td style="background-color: ${randomColor2}">${dataRow[4]}</td>
                            <td style="background-color: ${randomColor3}">${dataRow[5]}</td>
                            <td style="background-color: ${randomColor3}">${dataRow[6]}</td>
                            <td style="background-color: ${randomColor2}">${dataRow[7]}</td>
                            <td style="background-color: ${randomColor1}">${dataRow[8]}</td>
                            <td style="background-color: ${randomColor1}">${dataRow[9]}</td>
                            <td style="background-color: ${randomColor2}">${dataRow[10]}</td>
                        `;
                    }

                    // Append the new row to the table body
                    tableBody.appendChild(newRow);
                }
            }
        };

        reader.readAsText(file);
        // document.getElementById('credit_score_file_picker').value = null;
    }



}