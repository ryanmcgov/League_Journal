$(document).ready(function(){
	myLeagueJournal.init();
});

var journalData = "http://tiy-fee-rest.herokuapp.com/collections/ryanleague";

myLeagueJournal = {
	init: function() {
		this.initStyling();
		this.initEvents();
	},

	initStyling: function() {
		this.renderJournal();
	},

	initEvents: function() {
		$(".jumbotron").on("click", "button", function(e) {
			e.preventDefault();
			myLeagueJournal.addEntry();
		});
	},

	render: function($el, template, data) {
      	var tmpl = _.template(template, data);
      	$el.html(tmpl);
  	},

  	renderJournal: function() {
	    $.ajax({
	      url: journalData,
	      type: "GET",
	      dataType: "json",
	      error: function(jqXHR, status, error) {
	        alert("Failed");
	      },
	      success: function(data) { 
	      	var posts = window.posts = data;
	      	myLeagueJournal.render($(".entryFeed"), Templates.newPost, posts);      
	      }
	    });
	  },

	  addEntry: function() {
	 	var modeItem = $(".mode").val();
	 	var mapItem = $(".map").val();
	 	var leagueItem = $(".league").val();
	 	var championItem = $(".champion").val();
	 	var matchupItem = $(".matchup").val();
	 	var roleItem = $(".role").val();
	 	var killsItem = $(".kills").val();
	 	var deathsItem = $(".deaths").val();
	 	var assistsItem = $(".assists").val();
	 	var csItem = $(".lastHits").val();
	 	var matchTimeItem = $(".gameTime").val();
	 	var outcomeItem = $(".outcome").val();
	 	var summaryItem = $(".summary").val();

		var journalObj = {
			mode: modeItem,
			map: mapItem,
			league: leagueItem,
			champion: championItem,
			matchup: matchupItem,
			role: roleItem,
			kills: killsItem,
			deaths: deathsItem, 
			assists: assistsItem,
			cs: csItem,
			match_time: matchTimeItem,
			outcome: outcomeItem,
			summary: summaryItem

  			
  		};

  		$.ajax({
  			url: journalData,
  			type: "POST",
  			data: journalObj,
  			dataType: "json",
  			error: function(jqXHR, status, error) {
	        	alert("Failed");
	      	},
	      	success: function(data) {  
	      		$("input:text").val("");
	      		$(".summary").val("");     
	        	myToDoList.renderJournal();
	      	}
  		});
	  },

};