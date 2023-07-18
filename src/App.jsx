import InfiniteScroll from "react-infinite-scroll-component";
// import "./App.css";

function App() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" },
    { id: 15, name: "Item 15" },
  ];
  return (
    <>
      <div>
        <InfiniteScroll
          dataLength={items.length}
          next={items}
          hasMore={true} // Replace with a condition based on your data source
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </InfiniteScroll>
        {<p>Error: </p>}
      </div>
    </>
  );
}

export default App;
