import './App.css';
import ReactDeleteRow from './lib';

const App = () => {
  const data = [
    { title: 'One', body: 'one' },
    { title: 'Two', body: 'two' },
    { title: 'Three', body: 'three' }
  ];

  return (
    <>
      <h1 className='mt-3'>Hello World</h1>
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
            <ReactDeleteRow
              key={i}
              data={item}
              deleteElement={ <i className="fas fa-trash-alt" /> }
              iconClassName='text-danger'
              onDelete={ item => { return window.confirm(`Are you sure you want to delete "${item.title}"?`) }}>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </ReactDeleteRow>
          )}) }
        </tbody>
      </table>
    </>
  );
}

export default App;
