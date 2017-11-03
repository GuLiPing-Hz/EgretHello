/*
声明文件依赖:  
然而在最新5.0.11版本并没有什么卵用，我看了下manifest.json，里面的文件家长顺序还是错的
看来如果有静态对象，还是需要自己手动调整manifest.json中game加载顺序

*/

///<reference path="TestA.ts" />

class TestB {
	public static testBStr:string = TestA.arr.join("");

	public constructor() {
	}
}