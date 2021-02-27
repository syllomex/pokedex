import Realm from 'realm';
import { ObjectId } from 'bson';

class Pokemon {
  public _id: ObjectId;

  public name: string;

  public url: string;

  constructor ({ name, url, id }: { name: string; url: string; id: ObjectId }) {
    this._id = id || new ObjectId();
    this.name = name;
    this.url = url;
  }

  static schema: Realm.ObjectSchema = {
    name: 'Pokemon',
    properties: {
      _id: 'objectId',
      name: 'string',
      url: 'string',
    },
    primaryKey: '_id',
  };
}

export default Pokemon;
