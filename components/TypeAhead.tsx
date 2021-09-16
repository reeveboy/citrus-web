import { Typeahead } from "react-bootstrap-typeahead";

const TypeAhead = ({ items, setSelected }) => {
  return (
    <Typeahead
      id="typeahead"
      className="shadow-md appearance-none border rounded py-1 px-3 text-grey-darker"
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
