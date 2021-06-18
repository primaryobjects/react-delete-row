React Delete Row
================

A ReactJs UI component for rendering a table row with a delete button and fade effect.

## Screenshot

![ReactJs component for deleting a row in a table with a fade effect.](screenshot.gif)

## Usage

1. Install the react-delete-row module from npm.

```bash
npm install react-delete-row
```

2. Render an array of data in a table, with the first table body `<tr>` defined with `<ReactDeleteRow>`.

```
import ReactDeleteRow from 'react-delete-row';

// ...

const App = () => {
  const data = [
    { title: 'One', body: 'one' },
    { title: 'Two', body: 'two' },
    { title: 'Three', body: 'three' }
  ];

  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            { data.map((item, i) => { return (
            <ReactDeleteRow key={i} data={item} onDelete={ item => { return window.confirm(`Are you sure?`) }}>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </ReactDeleteRow>
            )}) }
        </tbody>
    </table>
  );
}
```

## Options

The following options are available on ReactDeleteRow:

- `data` - Payload data to return in event handler callbacks (onDelete, etc).

- `className` - CSS class to apply to the table row. *Optional*

- `iconClassName` - CSS class to apply to the delete icon. *Optional*

- `delay` - Number of milliseconds for the fade effect before removing the row from the DOM. *Default is 300ms*

- `deleteElement` - String or JSX elements (HTML) to render for the delete icon. *Default is 'X'*

- `onDelete` - Callback event handler for when the delete icon is clicked. Return `TRUE` to fade the row and remove from the DOM. Return `FALSE` to prevent removing the row. *Optional*

- `onDeleteComplete` - Callback event handler for after the row has been removed from the DOM. *Optional*

## Notes

The component uses the CSS class `fade` to fade out the table row upon clicking. This can be overridden in your CSS to customize the animation effect.

```css
.fade {
    opacity: 0;
    transition: opacity 500ms;
}
```

## Building the Library

To build the npm module, follow the steps below.

1. Clone the [repository](https://github.com/primaryobjects/react-delete-row).
2. Open a terminal and navigate to the root folder.
3. Run the command `npm install`.
4. The library can be found in the folder `/lib`.

*You can also manually run the command `npm run prepare` to create a new build.*

## Running the Example

To run the example, follow the steps below.

1. Clone the [repository](https://github.com/primaryobjects/react-delete-row).
2. Open a terminal and navigate to the folder `test`.
3. Run the command `npm install`.
4. Run the command `npm start`.

## License

MIT

## Author

Kory Becker http://www.primaryobjects.com/kory-becker