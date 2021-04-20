export default function CookieStandFooter({ reports }) {
    return (
        <footer className='bg-green-500 flex  mt-8'>
            <p className='mx-auto my-4'>{reports.length} Locations World Wide</p>
        </footer>
    )
}