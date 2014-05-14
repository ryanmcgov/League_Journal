Templates = {};

Templates.newPost = [
	"<% _.each(posts, function(post, index , list) { %>",
		"<div data-postId=\"<%= post._id %>\">",
			"<ul class=\"gameStats>\">",
				"<li> Game: <%= post.map %> (<%= post.mode %>) </li>",
				"<li> League: <%= post.league %> </li>",
				"<li> Role: <%= post.role %> </li>",
				"<li> Match Up: <%= post.champion %>  vs. <%= post.matchup %> </li>",
				"<li> Kills: <%= post.kills %> </li>",
				"<li> Deaths: <%= post.deaths %> </li>",
				"<li> Assists:<%= post.assists %> </li>",
				"<li> Outcome: <%= post.outcome %> (<%= post.match_time %>) </li>",
			"</ul>",
			"<p><%= post.summary %></p>",
		"</div>",
	"<% }); %>"
].join("\n");