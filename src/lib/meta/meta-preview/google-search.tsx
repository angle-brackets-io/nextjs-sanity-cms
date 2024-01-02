function GoogleSearchResult({
  websiteUrlWithoutProtocol,
  metaTitle,
  metaDesc,
}: {
  websiteUrlWithoutProtocol: string
  metaTitle: string
  metaDesc: string
}) {
  return (
    <>
      <div className="text-gray-800 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm leading-6">
        {websiteUrlWithoutProtocol}
      </div>
      <div className="text-blue-800 w-full cursor-pointer overflow-x-hidden text-ellipsis whitespace-nowrap text-2xl font-medium leading-9 hover:underline">
        {metaTitle}
      </div>

      {metaDesc && (
        <div className="text-gray-600 break-words text-base leading-6">
          {metaDesc}
        </div>
      )}
    </>
  )
}

export default GoogleSearchResult
