---
layout: page
title: Social Integrations
menus:
  projects_customizing:
    weight: 10
---

## Twitter Queries
Every hour Manifold will fetch up to 60 tweets for each of a project's Twitter Queries.

A Twitter Query is composed of the following characteristics:
- **Query**. A string of parameters as specified in the [Twitter search operators](https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators).
- **Results Type**. The types of tweets to return.  Allowed types are "most recent" and "most popular".
- **Active**. Specifies whether Manifold should fetch tweets for the Query.  Manifold will skip the query if `active` is set to `false`.

### Managing Queries
Twitter Query details are accessed from the drawer, which opens when a query is clicked in the Twitter Queries section.

#### Fetching Tweets
To fetch a Twitter Query's tweets immediately, click the `Fetch Tweets` button beside the green check icon under the Query's header.  If successful, the drawer will close and you should see the query's event count increase.

#### Deleting a Query
To delete a Twitter Query, click the `Delete Query` button beside the red trashcan icon under the Query's header.  You will receive a warning asking you to confirm you want to delete this particular Query. Deleting a Query permanently removes them from the system along with any associated tweet events.
