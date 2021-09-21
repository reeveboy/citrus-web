import { Typeahead } from "react-bootstrap-typeahead";

const TypeAhead = ({ items, setSelected }) => {
  return (
    <Typeahead
      id="typeahead"
      style={{ height: "40px" }}
      labelKey="name"
      onChange={(item) => {
        setSelected(item);
      }}
      options={items.items}
      paginate={true}
      minLength={1}
      placeholder="Search Item..."
    />
  );
};

export default TypeAhead;
