package org.goumiesland.structural.proxy;

public class TwitterStubDemo {

	public static void main(String[] args) {
		TwitterService service = (TwitterService) SecurityProxy.newInstance(new TwitterServiceStub());

		System.out.println(service.getTimeline("lkjlsd5"));
	}
}
