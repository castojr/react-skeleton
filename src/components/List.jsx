var React = require('react');
var ListItem = require('./ListItem.jsx');

var maintenanceI = [{"id":1,"text":"bilge pump"},{"id":2,"text":"shift cable"}, {"id":3,"text":"oil change"}];

var List = React.createClass({
    render: function() {
      var listItems = maintenanceI.map(function(item) {
          return <ListItem key={item.id} maintenance={item.text} />;
      });

      return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
