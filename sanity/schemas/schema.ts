import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import product from './product'
import heroimages from './heroImages'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category , product , heroimages],
}
