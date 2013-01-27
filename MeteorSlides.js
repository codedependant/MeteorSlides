if (Meteor.isClient) {

Template.t.rendered = function(){
    $("body").append('<script type="text/javascript" src="/reveal.min.js"></script>');

    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      theme: Reveal.getQueryHash().theme,
      transition: Reveal.getQueryHash().transition || 'default'
    });

    hljs.initHighlightingOnLoad();
  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
