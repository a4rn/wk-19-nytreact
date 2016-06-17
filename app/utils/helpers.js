/*Include the Axios library for HTTP requests*/
var axios = require('axios');

/* NYT API Key*/
var APIKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";

// Helper Functions
// These functions provide various methods we can use throughout our application.
var helpers = {

  // This runQuery function will be responsible for pinging the NYT API and retrieving articles.
  runQuery: function runQuery(term, start, end) {

    // Adjust to get search terms in proper format
    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    console.log("Query Run");

    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': APIKey,
        'q': term,
        'begin_date': start,
        'end_date': end
      }
    }).then(function(results) {
      console.log("Axios Results", results.data.response);

      return results.data.response;
    });
  },

  // This getSaved function will be responsible for pinging our own MongoDB database and retrieving our staved articles.
  getSaved: function getSaved() {

    return axios.get('/api/saved').then(function(results) {
      console.log("axios results", results);
      return results;
    });
  },

  // This postSaved function will be responsible for pinging our own MongoDB database and saving a new article.
  postSaved: function postSaved(title, date, url) {

    var newArticle = {
      title: title,
      date: date,
      url: url
    };
    return axios.post('/api/saved', newArticle).then(function(results) {
      console.log("axios results", results._id);
      return results._id;
    });
  },

  // This deleteSaved function will be responsible for pinging our own MongoDB database and deleting a selected article.
  deleteSaved: function deleteSaved(title, data, url) {

    return axios.delete('/api/saved', {
      params: {
        'title': title,
        'data': data,
        'url': url
      }
    }).then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }

};

// We export all of these helpers functions in one single object called "helpers"
module.exports = helpers;