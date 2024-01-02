import { groq } from 'next-sanity'

import { linkFragment } from '~/lib/sanity.fragments'

export const fragment = groq`
  address,
  email,
  footerLinks[] {
    _key,
    ${linkFragment}
  },
  socialLinks[] {
    _key,
    ${linkFragment}
  },
  "privacyLink": coalesce(privacyLink[0]{
    ${linkFragment}
  },[]),
  "termsLink": coalesce(termsLink[0]{
    ${linkFragment}
  },[])
`

export default function Footer({}) {
  return (
    <footer className="m-2 rounded bg-primary p-10 tracking-[-.01em] text-primary-light md:m-5 lg:px-15">
      footer
    </footer>
  )
}
