import Link from "next/link"
export default function Home() {
  return (
    <>
      <h1 className="text-4xl mb-10">My GitHub page</h1>
      <div className="mb-5 bg-blue-400 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/Shingunhoon"
          className="text-xl text-blue-700 font-bold"
        >
          GO to Overview
        </Link>
        <p className="mb-2">My own GitHub Overveiw</p>
      </div>
      <div className="mb-4 bg-blue-400 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/Shingunhoon?tab=repositories"
          className="text-xl text-blue-700 font-bold"
        >
          GO to Reposirory
        </Link>
        <p className="mb-2">Repository</p>
      </div>
    </>
  )
}
