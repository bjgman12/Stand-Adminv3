
import { hours } from '../data'

export default function CookieStandTable({ stands, onDelete }) {

    return (
        <Table >
            <thead className=''>
                <tr>

                    <TH>Location</TH>
                    {hours.map(slot => (
                        <TH key={slot}>{slot}</TH>
                    ))}
                    <TH>Totals</TH>
                </tr>
            </thead>
            <tbody className=''>
                {stands.map((stand, i) => {

                    return (
                        <tr   className='odd:bg-green-300' key={stand.id}>

                            <TH>
                                <div >

                                    <p>{stand.location}</p>

                                    <span onClick={() => onDelete(stand)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
</svg></span>
                                </div>
                            </TH>

                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i}>
                                    <td >
                                    {amt}
                                    </td>
                                </TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>

    );
}

function Table({ children }) {
    return (
        <table  className='bg-green-500 w-4/5 mx-auto mt-8 border-2 border-green-900 text-center rounded-lg'>
            {children}
        </table>
    );
}
function TH({ children }) {
    return (
        <th className='border-2 border-gray-600'>{children}</th>
    )
}

function TD({ children }) {
    return (
        <td className='border-2 border-gray-600 pl-8'>{children}</td>
    )
}