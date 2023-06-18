import "./SearchResult.css";

export var SearchResult = function SearchResult(_ref) {
  var result = _ref.result;

  return React.createElement(
    "div",
    {
      className: "search-result",
      onClick: function onClick(e) {
        return alert("You selected " + result + "!");
      }
    },
    result
  );
};