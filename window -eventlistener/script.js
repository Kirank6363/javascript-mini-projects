let insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
        <div>
            <table>
                <tr>
                    <th>key</th>
                    <th>code</th>
                </tr>
                <tr>
                    <td>${e.key}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})