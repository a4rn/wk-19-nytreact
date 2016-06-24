var React = require('react');
// var SearchNYTimes = require('./SearchNYTimes');
var Router = require('react-router');


// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Main = React.createClass({

   handleSubmit: function() {

          var searchtext = this.refs.search.value;
          console.log(searchtext);
    // this.usernameRef.value = '';
    // this.history.pushState(null, "profile/" + username)
  },
      render: function() {
        
        return (

        <div className = "container">
              <div className = "jumbotron" style = {{backgroundColor: '#20315A' ,color: 'white'}}>
    
                    <h1 className = "text-center"><strong><i className = "fa fa-newspaper-o"></i> New York Times Search </strong></h1>
	            </div>

              <div className="row">
                    <div className="col-sm-12">
                    <br></br>
                          <div className="panel panel-primary">
                                <div className="panel-heading">
                                      <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>Search Parameters</strong></h3>
                                </div>
                   
                                <div className = "panel-body">

                                      <form role="form">
                                            <div className="form-group">
                                                  <label for="search">Search Term:</label>
                                                  <input type="text" className="form-control" ref='search'></input>
                                            </div>
                               
                                            <div className="form-group">
                                                  <label for="pwd">Number of Records to Retrieve:</label>
                                                  <select className="form-control" id="numRecordsSelect"></select>                 
                                            </div>

                               
                                              <div className="form-group">
                                                <label for="startYear">Start Year (Optional):</label>
                                                <input type="text" className="form-control" id="startYear"></input>
                                              </div>

                                           
                                              <div className="form-group">
                                                <label for="endYear">End Year (Optional):</label>
                                                <input type="text" className="form-control" id="endYear"></input>
                                              </div>

                                              
                                            
                                              <button type="submit" className="btn btn-default" onClick={this.handleSubmit}><i className="fa fa-search"></i> Search</button>
                                              <button type="button" className="btn btn-default" onClick={this.handleSubmit}><i className="fa fa-trash"></i> Clear Results</button>

                                      </form>
                                </div>
                          </div>
                    </div>
              </div>

              <div className="row">
                    <div className="col-sm-12">
                    <br></br>
                         
                          <div className="panel panel-primary">

                                <div className="panel-heading">
                                      <h3 className="panel-title"><strong><i className="fa fa-table"></i>Top Articles</strong></h3>
                                </div>

                                <div className="panel-body" id="wellSection"></div>
                          </div>
                    </div>
              </div>

        </div>
            
    )
  }
});
         module.exports = Main;