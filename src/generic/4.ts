/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface ComponentPage {
  title: string;
}

class Page extends Component<ComponentPage> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
