export class Context<T> {

  private current_value: T
  public $data: { [key: symbol]: any } = {}

  get $(): T {
    return this.current_value
  }

}
