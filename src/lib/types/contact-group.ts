import { CaseStyle } from 'kryo/case-style';
import { AnyType } from 'kryo/types/any';
import { ArrayType } from 'kryo/types/array';
import { BooleanType } from 'kryo/types/boolean';
import { DocumentType } from 'kryo/types/document';
import { Ucs2StringType } from 'kryo/types/ucs2-string';

/**
 * Example:
 * ```
 * {
 *   "id": "000C3765-A8A0-464C-8083-C8383B86A772",
 *   "name": "Favorites",
 *   "is_favorite": true
 * }
 * ```
 */
export interface ContactGroup {
  id: string;
  name: string;
  isFavorite?: boolean;
  contacts?: any[];
}

export const $ContactGroup: DocumentType<ContactGroup> = new DocumentType<ContactGroup>({
  properties: {
    id: { type: new Ucs2StringType({ maxLength: Infinity }) },
    name: { type: new Ucs2StringType({ maxLength: Infinity }) },
    isFavorite: { type: new BooleanType(), optional: true },
    contacts: { type: new ArrayType({ itemType: new AnyType(), maxLength: Infinity }), optional: true },
  },
  changeCase: CaseStyle.SnakeCase,
  noExtraKeys: true,
});
