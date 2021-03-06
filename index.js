// Generated by CoffeeScript 1.10.0
(function() {
  var scripts, styles;

  scripts = ["jquery-2.2.1.js", "bootstrap.min.js", "mmturkey.js", "underscore.js", "coffee-script.js", "coffeecup.js"];

  styles = ["bootstrap.min.css", "bootstrap-theme.min.css"];

  doctype(5);

  html(function() {
    head(function() {
      var i, j, len, len1, results, s;
      meta({
        charset: "utf-8"
      });
      title("Cause and Affect");
      for (i = 0, len = styles.length; i < len; i++) {
        s = styles[i];
        link({
          rel: "stylesheet",
          href: "packages/" + s
        });
      }
      results = [];
      for (j = 0, len1 = scripts.length; j < len1; j++) {
        s = scripts[j];
        results.push(script({
          src: "packages/" + s
        }));
      }
      return results;
    });
    return body(function() {
      h1("Client-side coffee experiment");
      p("Everything written in beautiful coffeescript");
      return script({
        type: "text/coffeescript",
        src: "exp.coffee"
      });
    });
  });

}).call(this);
