Templates = {};

Templates.newPost = [
	"<% _.each(posts, function(post, index , list) { %>",
		"<div data-postId=\"<%= post._id %>\">",
			"<ul>",
				"<li> <%= post.map %> ( <%= post.mode %> ) </li>",
				"<li> <%= post.league %> </li>",
				"<li> <%= post.role %> </li>",
				"<li> <%= post.champion %>  vs. <%= post.matchup %> </li>",
				"<li> <%= post.kills %> </li>",
				"<li> <%= post.deaths %> </li>",
				"<li> <%= post.assists %> </li>",
				"<li> <%= post.outcome %> ( <%= post.match_time %> ) </li>",
			"</ul>",
			"<p><%= post.summary %></p>",
		"</div>",
	"<% }); %>"
].join("\n");