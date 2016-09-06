import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import { analytics } from './config';

const Html = ({ title, description, style, script, children }) => {
  const gaTracker = analytics.google.tracking(analytics.google.trackingId);
  const gaDate = analytics.google.date;
  const gaUrl = 'https://www.google-analytics.com/analytics.js';

  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="manifest" href="/assets/favicons/manifest.json" />
        <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          href="//fonts.googleapis.com/css?family=Dancing+Script:400,700|Droid+Serif:400,700|Roboto:400,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/linearicons.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {script && <script src={script} />}
          {analytics.google.trackingId &&
            <script dangerouslySetInnerHTML={{ __html: gaDate + gaTracker }} />
          }
          {analytics.google.trackingId &&
            <script src={gaUrl} async defer />
          }
      </body>
    </html>
  );
};

Html.displayName = 'Html';

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  script: PropTypes.string,
  children: PropTypes.string
};

export default Html;
