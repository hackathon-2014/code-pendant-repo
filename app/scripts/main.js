$(document).ready(function() {

  myCommunity.init();


});

  var myCommunity = {
    init: function() {
      this.initStyling();
      this.initEvents();
    },
    initStyling: function() {
      myCommunity.getPost();

    },
    initEvents: function() {

      $(".form").on("submit", function(event) {

        event.preventDefault();
        var newPost = {
          nameinput: $(".nameinput").val(),
          experienceinput: $(".experienceinput").val(),
          techinput: $(".techinput").val(),
          textinput: $(".textinput").val(),
          emailinput: $(".emailinput").val(),
        };

        myCommunity.createPost(newPost);

      });
      // $(".container").on("click", ".destroy", function(){
      //
      //   event.preventDefault();
      //   var postId = $(this).closest("article").data("postid");
      //   myCommunity.deletePost(postId);
      //
      // });
      //
      // $(".container").on("click", ".editPost", function(){
      //   event.preventDefault();
      //   $(this).closest("article").find("form").toggleClass("hide");
      //
      // });
      $(".container").on("click", ".update", function(event){

        event.preventDefault();
        var postId = $(this).closest("article").data("postid");
        var updatedPost = {
          textinput:$(this).closest("article").find(".editTitle").val(),
          emailinput: $(this).closest("article").find(".editContent").val(),
        };
        myCommunity.updatePost(postId, updatedPost);
      });

    },
    render: function (template, data, $el) {
      var markup = _.template(template, data);

      $el.html(markup);
    },
    url: "http://chshackathon.herokuapp.com/collections/code-pendant",
    getPost: function() {

      $.ajax({
        url: myCommunity.url,
        type: 'GET',
        success: function(response) {
          var posts = window.posts = response;

          myCommunity.render(postTmpl, posts, $(".newsfeed"));
        }
      });
    },
    createPost: function(newPost) {

      $.ajax({
        url: myCommunity.url,
        data: newPost,
        type: 'POST',
        success: function(response) {
          myCommunity.getPost();
        }
      });

    },
    deletePost: function(postId) {
      $.ajax({
        url: myCommunity.url + "/" + postId,
        type: 'DELETE',
        success: function() {
          myCommunity.getPost();
        }


      });

    },
    updatePost: function(postId, updatedPost) {

      $.ajax({
        url: myCommunity.url + "/" + postId,
        type: 'PUT',
        data: updatedPost,
        success: function (response) {
          console.log(response);
          myCommunity.getPost();

        }
      });

    }
  };
