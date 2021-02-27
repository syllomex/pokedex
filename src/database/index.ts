import Realm from 'realm';
import Pokemon from './models/Pokemon';

export default async function openRealm () {
  try {
    const realm = await Realm.open({ schema: [Pokemon.schema] });
    console.log('Opened realm');
    return realm;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
