import { PageAttributes } from './Attributes';

export class Page{
  public id: string
  public html: string
  public attributes: PageAttributes

  constructor(model: Page) {
    Object.assign(this, model)
  }
}
