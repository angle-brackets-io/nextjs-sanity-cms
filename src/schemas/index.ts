import { author } from './documents/author'
import { blockContent } from './documents/blockContent'
import { category } from './documents/category'
import { navigation } from './documents/navigation'
import { page } from './documents/page'
import { post } from './documents/post'
import { img } from './objects/img'
import { link } from './objects/link'
import { optionalLink } from './objects/optional-link'

export const schemaTypes = [
  page,
  link,
  optionalLink,
  navigation,
  img,
  post,
  author,
  category,
  blockContent,
]

export const documentTypesForWorkFlow = [page, post]