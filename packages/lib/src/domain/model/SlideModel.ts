import { PageAttributes } from '.'

export interface SlideModel {
  id: string
  html: string
  layout: {default: React.ElementType<any>}
  attributes: PageAttributes
}
