
import Link from 'next/link'

export default function CookieStandHeader({ username, onLogout }) {
    return (
        <header className='bg-green-500 flex' >
            <section className='flex w-2/3 mx-auto justify-between'>
            <h1 className='text-4xl my-4 font-bold'>
                Cookie Stand Admin 
                </h1>
            <div className='mr-20 flex  my-5'>
                <p className='bg-green-200 rounded-lg p-1 px-2 mr-2' >{username}</p>
                <Link href="/">
                    <a onClick={onLogout} className=' bg-green-900 rounded-lg p-1 px-1 mr-1 text-white' >Sign Out</a>
                </Link>
                <nav>
                    <Link href="/overview"><a className=' bg-gray-200 rounded-lg p-1 px-1'>Overview</a></Link>
                </nav>
            </div>
            </section>
        </header>
    )
}