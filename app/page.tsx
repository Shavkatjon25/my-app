import Image from "next/image"


function page() {
  return (
    <div className="bg-black w-full min-h-[100vh]">

      <div className="h-[15vh] w-full felx justify-between">
        <h1 className="text-white text-[2rem]">Kitoblar</h1>
        <Image src="./vercel.svg" alt="" width={100} height={100}/>
      </div>

      <div   className="bg-[#fff] min-h-[85vh] w-full rounded-t-[50px]">


          <div className="flex flex-col items-center">
            <h2>Menga yoqqanlari</h2>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>

      </div>

    </div>
  )
}

export default page