import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className=" py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <div className="flex flex-col justify-center gap-y-6 text-center">
            <h1 className="font-bold text-6xl">Create, Demo, Upload</h1>
            <p className="font-semibold text-xl">
              {" "}
              Easily create and screen record videos for classes.
            </p>
          </div>
          <Image
            src={"/svg/Gamestation.svg"}
            width={1000}
            height={1000}
            alt="hero"
            className="max-h-[70vh] object-contain object-center"
          />
        </div>
      </section>
    </>
  );
}
