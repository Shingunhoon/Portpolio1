import Link from "next/link"

const ProjectPage = () => {
  return (
    <>
      <h1 className="text-4xl mb-10 font-bold">개인 프로젝트</h1>
      <div className="mb-10 bg-blue-100 p-4 m-4 rounded-lg text-3xl">
        1st{" "}
        <Link
          href="https://sgh01.vercel.app/"
          className="text-xl text-blue-700 font-bold"
        >
          https://sgh01.vercel.app/
        </Link>
      </div>

      <div className="mb-10 bg-blue-100 p-4 m-4 rounded-lg text-3xl">
        2nd{" "}
        <Link
          href="https://second-kohl.vercel.app/"
          className="text-xl text-blue-700 font-bold"
        >
          https://sgh01.vercel.app/
        </Link>
      </div>

      <div className="mb-10 bg-blue-100 p-4 m-4 rounded-lg">
        <p className="">3rd</p>
      </div>
    </>
  )
}
export default ProjectPage
