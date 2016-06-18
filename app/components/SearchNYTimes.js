var React = require('react');
var Router = require('react-router');

var SearchNYTimes = React.createClass({
  mixins: [Router.History],
  getRef: function(ref){
    this.searchtextRef = ref;
    console.log(ref);
  },
  handleSubmit: function(){
    var searchtext = this.searchtextRef.value;
    console.log(searchtext);
    // this.usernameRef.value = '';
    // this.history.pushState(null, "profile/" + username)
  },
  render: function(){
    return (
        <div>

          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-default"><i className="fa fa-search"></i> Search</button>         
            

          </form>
       </div>
    )
  }
});

module.exports = SearchNYTimes;

  