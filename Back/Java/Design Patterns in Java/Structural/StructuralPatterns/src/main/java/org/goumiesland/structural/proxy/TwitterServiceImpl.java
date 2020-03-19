package org.goumiesland.structural.proxy;

import twitter4j.*;
import twitter4j.conf.ConfigurationBuilder;

import java.util.List;

//https://gist.github.com/bh5k/73a82d64e35e780150d1

public class TwitterServiceImpl implements TwitterService {

    private static final String TWITTER_CONSUMER_KEY = "EHuLaQJL4WI8U4k9GNKJRjT3f";
    private static final String TWITTER_SECRET_KEY = "8bSZkD2I4zmVaNxIkyBirbquZlsG5e7zOYOYJT6bKSynOBq1GO";
    private static final String TWITTER_ACCESS_TOKEN = "255938580-r446j0o3Pnh6FdcqNaVoj9AtjJKvDVPv6d3zeGDN";
    private static final String TWITTER_ACCESS_TOKEN_SECRET = "3PlCUKru6EBOmAT8u9Y2gFfJdvyoGpNQXbdBH1S2xWtB3";

    @Override
    public String getTimeline(String screenName) {

        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
                .setOAuthConsumerKey(TWITTER_CONSUMER_KEY)
                .setOAuthConsumerSecret(TWITTER_SECRET_KEY)
                .setOAuthAccessToken(TWITTER_ACCESS_TOKEN)
                .setOAuthAccessTokenSecret(TWITTER_ACCESS_TOKEN_SECRET);
        TwitterFactory tf = new TwitterFactory(cb.build());
        Twitter twitter = tf.getInstance();
        StringBuilder builder = new StringBuilder();
        try {
            Query query = new Query(screenName);
            QueryResult result;
            do {
                result = twitter.search(query);
                List<Status> tweets = result.getTweets();
                for (Status tweet : tweets) {
                    builder.append("@");
                    builder.append(tweet.getUser().getScreenName());
                    builder.append(" - ");
                    builder.append(tweet.getText());
                    builder.append("\n");
                }
            } while ((query = result.nextQuery()) != null);

        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to search tweets: " + te.getMessage());
        }
        return builder.toString();
    }

    @Override
    public void postToTimeline(String screenName, String message) {
        //we aren't going to allow this
        System.out.println(message);
    }
}