//声明文件依赖:
///<reference path="../TestB.ts" />

class TestCall {
 	public static test:any = egret.getDefinitionByName(TestB.testBStr);

	public constructor() {
	}
}