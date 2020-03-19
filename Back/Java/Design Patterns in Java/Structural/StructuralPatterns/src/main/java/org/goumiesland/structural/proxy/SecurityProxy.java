package org.goumiesland.structural.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class SecurityProxy implements InvocationHandler {

	private Object obj;

	private SecurityProxy(Object obj) {
		this.obj = obj;
	}

	public static Object newInstance(Object obj) {
		// Wrapping the object with a proxy
		return java.lang.reflect.Proxy.newProxyInstance(obj.getClass().getClassLoader(), obj
				.getClass().getInterfaces(), new SecurityProxy(obj));
	}

	// Where the proxy comes into play
	@Override
	public Object invoke(Object proxy, Method m, Object[] args) throws Throwable {
		Object result;
		try {
			if (m.getName().contains("post")) {
				throw new IllegalAccessException("Posts are currently not allowed");
			} else {
				result = m.invoke(obj, args);
			}
		} catch (InvocationTargetException e) {
			throw e.getTargetException();
		} catch (Exception e) {
			throw new RuntimeException("unexpected invocation exception: "
					+ e.getMessage());
		}
		return result;
	}

}
