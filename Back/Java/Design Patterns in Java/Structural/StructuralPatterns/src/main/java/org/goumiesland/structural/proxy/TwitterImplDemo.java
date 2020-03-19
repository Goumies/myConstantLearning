package org.goumiesland.structural.proxy;

public class TwitterImplDemo {

	public static void main(String[] args) {
		TwitterService service = (TwitterService) SecurityProxy.newInstance(new TwitterServiceImpl());

		System.out.println(service.getTimeline("bh5k"));

		service.postToTimeline("bh5k", "Some message that should not go through");
	}
}
