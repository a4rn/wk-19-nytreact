var React = require('react');

// Here we create a component to hold the repos informatino
var News = React.createClass({
	render: function(){

		// Map the news and loop through
		// When we map an array we effectively say... loop through each news
		// and perform the code in the function.
		// So in this case we are creating an array called "news" 
		// which holds a series of HTML divs displaying lists. 
		// news = [<div>...</div>, <div>...</div>, <div>...</div>, <div>...</div>]
		var news = this.props.news.map(function(repo, index){
			return(
				<div>
					{/*It's important that we include the key. Otherwise React will throw an error*/} 
			        <li className="list-group-item" key={index}>

		              {/*Notice the funny && syntax again. This lets us display the a tag if it exists.*/}
		          	  {/*Look into double ampersand if confused. */}
			          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
			          {repo.description && <p>{repo.description}</p>}
			        </li>
				</div>
			)
		});

		{/*Note the above code isn't what was getting rendered by the component. The above "return" was simply to build the news array. What ultimately gets rendered by the component is the "news" array */}
		
		return (
			<div>
				<h3> User news </h3>
				<ul className="list-group">
					{news}
				</ul>
			</div>
		)
	}
});

/*We then export the News component*/
module.exports = News;

