export default function Layout({ children }: { children: React.ReactNode }) {
    return ( 
        <div className="flex flex-row h-screen justify-center items-center">{children }</div>
    )
}