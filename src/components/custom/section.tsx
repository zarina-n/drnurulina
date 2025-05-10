export function Section({
  id,
  title,
  children,
  className = '',
  hideTitle = false
}: {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
  hideTitle?: boolean
}) {
  return (
    <section id={id} className={`mb-8 w-full md:py-16 ${className}`}>
      {!hideTitle && title && (
        <>
          {/* <h2 className='mx-auto mb-6 max-w-4xl rounded-lg bg-gradient-to-r from-blue-300 to-pink-300 p-6 text-center text-3xl font-semibold text-gray-800 text-white'>
            {title}
          </h2>
          <h2 className='mx-auto mb-6 max-w-4xl rounded-lg bg-gradient-to-r from-teal-100 to-pink-100 p-6 text-center text-3xl font-semibold text-gray-700 text-gray-800'>
            {title}
          </h2>
          <h2 className='mx-auto mb-6 max-w-4xl rounded-lg bg-gradient-to-r from-teal-200 to-pink-200 p-6 text-center text-3xl font-semibold text-gray-700 text-gray-800 shadow-sm'>
            {title}
          </h2>
          <h2 className='mx-auto mb-6 max-w-4xl rounded-lg bg-gradient-to-r from-teal-100 to-pink-100 p-6 text-center text-3xl font-medium text-gray-700'>
            {title}
          </h2>
          <h2 className='mx-auto mb-6 max-w-3xl rounded-4xl border-2 border-gray-300 bg-gradient-to-r from-teal-200 to-pink-200 p-6 text-center text-3xl font-semibold text-gray-700 text-gray-800'>
            {title}
          </h2> */}
          <h2 className='mx-auto mb-6 max-w-xl rounded-4xl border-4 border-gray-300 bg-gradient-to-r from-teal-200 to-pink-200 p-6 text-center text-3xl font-semibold text-gray-700'>
            {title}
          </h2>
        </>
      )}
      {children}
    </section>
  )
}
