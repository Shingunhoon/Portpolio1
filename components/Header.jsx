import Link from "next/link"
const Header = () => {
  return (
    <>
      <nav className="bg-gray-800 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">신건훈 포토폴리오</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            <Link
              href="/aboutMe"
              className="text-gray-300 hover:text-white mr-4"
            >
              Profile
            </Link>

            <Link href="/skill" className="text-gray-300 hover:text-white mr-4">
              Skills
            </Link>

            <Link
              href="/pproject"
              className="text-gray-300 hover:text-white mr-4"
            >
              Personal Project
            </Link>

            <Link
              href="/tproject"
              className="text-gray-300 hover:text-white mr-4"
            >
              Team Project
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
