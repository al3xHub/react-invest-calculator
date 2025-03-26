export default function Table({year, investmentValue, interest, investedCapital}) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{year}</td>
                    <td>{investmentValue}</td>
                    <td>{interest}</td>
                    <td>{investedCapital}</td>   
                </tr>
            </tbody>
        </table>
    );
}