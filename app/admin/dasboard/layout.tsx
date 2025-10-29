export default function dasboard({children}: {children: React.ReactNode}) {
    return (
        <div>
<h1 className="text-4xl text-black font-bold"> Selamat Datang</h1>
{children}
        </div>
    )
}