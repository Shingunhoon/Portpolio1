import Link from "next/link"
import Image from "next/image"
const ProjectPage = () => {
  return (
    <>
      <h1 className="text-4xl mb-10 font-bold">팀 프로젝트</h1>
      <div className="mb-10 bg-blue-100 p-4 m-4 rounded-lg ">
        <h1 className="text-3xl">1st</h1>
        {/* <Image src="/images/p1.jpg"
        width={500} height={500} />
         */}
        <a href="https://potato-market.vercel.app/">
          <img src="/images/p1.jpg" width={550} height={(400 / 800) * 300} />
        </a>

        <p> 92015075 김평안</p>
        <p> 92014966 김건희</p>
        <p> 92015154 박준형</p>
        <p> 92015192 신건훈</p>
      </div>

      <div className="mb-10 bg-blue-100 p-4 m-4 rounded-lg text-3xl">2nd</div>

      <div className="mb-10 bg-blue-100 p-4 m-4 rounded-lg text-3xl">
        <p className="">3rd</p>
      </div>
    </>
  )
}
export default ProjectPage
