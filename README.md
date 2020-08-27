[![npm version](https://badge.fury.io/js/%40tds-software%2Fquery-view.svg)](https://badge.fury.io/js/%40tds-software%2Fquery-view)

# Query View

Query View is a Angular library for display data.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install foobar.

```bash
npm install @tds-software/query-view
```

## Usage

In your module:

```javascript
import { QueryViewModule } from  '@tds-software/query-view';

@NgModule({
   declarations: []
   imports: [QueryViewModule],
})
```

In your component template:

```javascript
<tds-query-view  [table]="table-component"></tds-query-view>
```

Will have acess to `QueryViewService` to page, sort filter and search.

```javascript
constructor(
	private  yourService: YourService,
	private  queryViewService: QueryViewService
) {}

ngOnInit(): void {
	this.dataSource$ = this.queryViewService.dataSource$((params) =>
		this.usuariosService.getAll(params)
	);
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
