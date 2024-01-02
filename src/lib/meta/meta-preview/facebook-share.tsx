import Image from 'next/image'

import { urlForImage } from '../sanity.image'
import { Props } from './twitter-card'

function FacebookShare({
  websiteUrlWithoutProtocol,
  shareTitle,
  shareDesc,
  shareGraphic,
}: Props) {
  return (
    <div className="cursor-pointer">
      <div className="flex w-full overflow-hidden">
        {shareGraphic ? (
          <Image
            className="h-48 w-full object-cover"
            width={1200}
            height={630}
            src={urlForImage(shareGraphic)?.width(1200).height(630).url()}
            alt="Image"
          />
        ) : (
          <span className='content-["no photo set!"] absolute left-0 right-0 top-1/2 block -translate-y-1/2 transform text-center' />
        )}
      </div>
      <div className="border-gray-200 border bg-white p-4">
        <div className="text-gray-500 mb-2 flex-shrink-0 overflow-hidden text-xs font-medium uppercase tracking-wide">
          {websiteUrlWithoutProtocol}
        </div>
        <div className="text-gray-900 truncate text-base font-medium leading-6">
          <a>{shareTitle}</a>
        </div>
        {shareDesc && (
          <div className="text-gray-500 mt-2 max-h-16 truncate text-sm leading-5">
            {shareDesc}
          </div>
        )}
      </div>
    </div>
  )
}

export default FacebookShare
