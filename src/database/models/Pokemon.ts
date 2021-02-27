import Realm from 'realm';

class Pokemon {
  public id: number;

  public name: string;

  public url: string;

  constructor ({ name, url, id }: { name: string; url: string; id: number }) {
    this.id = id;
    this.name = name;
    this.url = url;
  }

  static schema: Realm.ObjectSchema = {
    name: 'Pokemon',
    properties: {
      id: 'int',
      name: 'string',
      url: 'string',
    },
    primaryKey: 'id',
  };
}

export default Pokemon;
