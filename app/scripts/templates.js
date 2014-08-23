var postTmpl = [
  "<% _.each(posts, function(element, index, list) { %>",
  "<article data-postid=\"<% element._id %>\" class=\"post\">",
    "<h3><%= element.nameinput %></h3>",
    "<p><%= element.experienceinput %> years of experience!</p>",
    "<p><%= element.techinput %></p>",
    "<p><%= element.textinput %></p>",
    "<p><%= element.emailinput %></p>",
    "<p><button class=\"editPost\">Update</button> <button class=\"nevermind\">Scratch That</button> <button class=\"answerQuestion\">Answer!</button></p>",



  "<form class=\"hidden\" name=\"helpPost\">",
      "<textarea name=\"editContent\" class=\"editContent\" cols=\"20\" rows=\"10\">",
      "<%= element.content %>",
      "</textarea>",
      "<input type=\"submit\" class=\"respond\" value=\"Help Them!\">",
  "</form>",
  "</article>",
  "<% }); %>"
].join("\n");
