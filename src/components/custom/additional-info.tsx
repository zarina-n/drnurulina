export default function AdditionalInfo({ text }: { text: string }) {
  return (
    <div className='mx-auto mt-8 max-w-xl rounded-4xl bg-[#6680c0] p-6 shadow-lg'>
      <p className='text-sm text-white'>{text}</p>
    </div>
  )
}
