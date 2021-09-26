import { Typeahead } from "react-bootstrap-typeahead";
import React, { useEffect } from "react";

const TypeAhead = ({ items, setSelected, isSubmitting }) => {
  const ref = React.createRef();
  useEffect(() => {
    if (isSubmitting) {
      // @ts-ignore
      ref.current.clear();
    }
  }, [isSubmitting]);
  return (
    <>
      <Typeahead
        id="typeahead"
        className="typeahead"
        style={{ height: "40px" }}
        labelKey="name"
        onChange={(item) => {
          setSelected(item);
        }}
        options={items.items}
        paginate={true}
        minLength={1}
        placeholder="Search Item..."
        ref={ref}
      />
    </>
  );
};

export default TypeAhead;
