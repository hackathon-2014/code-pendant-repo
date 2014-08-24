var postTmpl = [
  "<% _.each(posts, function(element, index, list) { %>",
  "<article data-postid=\"<% element._id %>\" class=\"post\">",
    "<h3><%= element.nameinput %></h3>",
    "<p><%= element.experienceinput %> years of experience!</p>",
    "<p><%= element.techinput %></p>",
    "<p><%= element.textinput %></p>",
    "<p><%= element.emailinput %></p>",
    "<p><button class=\"editPost\">Update</button> <button class=\"nevermind\">Scratch That</button></p>",



  
  "</article>",
  "<% }); %>"
].join("\n");
