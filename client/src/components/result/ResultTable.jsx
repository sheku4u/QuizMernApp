import React from 'react'

function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <th>Name</th>
                    <th>Attempts</th>
                    <th>Earn Points</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-body">
                    <td>Abhishek</td>
                    <td>1</td>
                    <td>40</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable