import StickerSVG from "../../public/sticker"
export default function Sticker() {
  return (
    <div className='flex flex-col bg-blue-700 p-10 text-center rounded-xl gap-5 text-white my-5 md:my-0 items-center'>
      <div className='text-3xl font-bold'>Get Started With KoinX For FREE</div>
      <div>With our range of features which you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</div>
      <div>
        <StickerSVG />
      </div>
      <div className='bg-white p-3 font-bold text-black rounded-md flex items-center gap-1'>
        <div>Get Started For Free</div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </div>
      </div>
    </div>
  )
}
