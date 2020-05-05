import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

let store: IStore = null as any;

const Store = types
  .model({
    token: types.string,
    isSignin: false,
  })
  .actions(self => {
    const signin = (token: string) => {
      self.isSignin = true,
      self.token = token
    }
    const signout = () => {
      self.isSignin = false,
      self.token = ''
    }
    return { signin, signout };
  });

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;
export type IStoreSnapshotOut = SnapshotOut<typeof Store>;

export const initializeStore = (snapshot = null) => {
  if((store as any) === null) {
    store = Store.create({ isSignin: false, token: '' });
  }
  // if(snapshot) {
  //   applySnapshot(store, snapshot);
  // }
  return store;
}
