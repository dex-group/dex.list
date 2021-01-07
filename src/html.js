import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="canonical" href="https://dexlist.page/"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script async defer data-domain="dexlist.page" src="https://stats.dexlist.page/js/index.js"></script>
        <!-- 万维广告联盟代码 - wwads.cn -->
        <script type="text/javascript">
          (function(){
          var _sr = document.createElement('script');
          _sr.type = 'text/javascript';
          _sr.async = true;
          _sr.src = 'https://wwads.cn/code/install';
          (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(_sr);
          })();
        </script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
