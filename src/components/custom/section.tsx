import { Separator } from '../ui/separator'

export function Section({
  id,
  title,
  children,
  className = '',
  hideTitle = false,
  noSeparator = false
}: {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
  hideTitle?: boolean
  noSeparator?: boolean
}) {
  return (
    <>
      <section
        id={id}
        className={`mt-8 mb-4 flex w-full flex-col gap-4 py-5 ${className}`}
      >
        {!hideTitle && title && (
          <div className='text-center'>
            <h2 className='mb-6 inline-block rounded-2xl border-4 border-gray-300 bg-gradient-to-r from-teal-200 to-pink-200 p-2 text-center text-3xl font-semibold text-gray-700 uppercase md:mb-8'>
              {title}
            </h2>
          </div>
        )}
        {children}
      </section>

      {!noSeparator && (
        <Separator className='h-1 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 shadow-xl' />
      )}
    </>
  )
}
