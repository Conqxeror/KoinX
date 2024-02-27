import StickerSVG from "@/public/sticker"
export default function Sticker() {
  return (
    <div className='flex flex-col bg-blue-700 p-10 text-center rounded-xl gap-5 text-white my-5 md:my-0 items-center'>
        <div className='text-3xl font-bold'>Get Started With KoinX For FREE</div>
        <div>With our range of features which you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</div>
        <div>
          <StickerSVG />
        </div>
        <div className='bg-white p-3 font-bold text-black rounded-md'>Get Started For Free</div>
    </div>
  )
}
