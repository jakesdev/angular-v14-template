
export class NavigateMenuModel {
  name!: string;
  icon!: string;
  url!: string;
  children?: NavigateMenuModel[];

  public constructor(init?: Partial<NavigateMenuModel>) {
    Object.assign(this, init);
  }
}
