export const CurrentValue = Symbol('CurrentValue')

export class Context {

  public $data: { [key: symbol]: any } = {
    [CurrentValue]: null
  }

  get $(): any {
    return this.$data[CurrentValue]
  }

}
