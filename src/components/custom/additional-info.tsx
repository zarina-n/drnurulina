export default function AdditionalInfo({ text }: { text: string }) {
  return (
    <div className='mx-auto mt-8 max-w-xl rounded-4xl border-2 border-blue-500 bg-blue-50 p-6 shadow-lg'>
      <p className='text-sm text-blue-700'>{text}</p>
    </div>
  )
}
