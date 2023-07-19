type WithGeneric<T> = T;
type Foo = { (e: string): void }; // no error
export type Foo1 = WithGeneric<Foo>;
export type Foo2 = WithGeneric<{ (e: string): void }>; // error
