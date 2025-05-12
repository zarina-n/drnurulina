export default function TariffsDesktop({
  fullInfo
}: {
  fullInfo: (string | string[])[]
}) {
  return (
    <div className='mb-4 hidden grow space-y-3 px-6 pb-4 md:block'>
      {fullInfo.map((block, j) =>
        Array.isArray(block) ? (
          <ul key={j} className='list-disc pl-5 text-sm text-gray-700'>
            {block.map((item, k) => (
              <li key={k}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={j} className='text-sm text-gray-700'>
            {block}
          </p>
        )
      )}
    </div>
  )
}
