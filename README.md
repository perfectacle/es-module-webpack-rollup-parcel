# ES Module의 Module Bundler Test
## NPM Script
* `npm run webpack` - 웹팩으로 모듈 번들링(바벨 X)  
* `npm run rollup` - 롤업으로 모듈 번들링(바벨 X)  
* `npm run parcel` - parcel로 모듈 번들링(바벨 X)  
* `npm run bundler` - 위 3개 모듈 번들러로 번들링  
* `npm run babel` - 모듈로 번들링 한 걸 바벨로 트랜스파일  
* `npm run gulp` - 모듈로 번들링 한 걸 gulp-babel로 트랜스파일
* `npm run task` - 위 두 개 트랜스파일 스크립트 실행  
* `npm run all` - bundler, task 스크립트 실행  

dist directory의 html을 실행해서 확인해 볼 것...(사실 gulp-babel은 할 필요가 없는데 혹시나 gulp-babel의 기본 설정값이 다를까 궁금해서 돌려봄.)  
parcel의 경우에는 output file name을 지정하지 못해서 어쩔 수 없이 default 값인 index.js로 파일을 떨굼.

직접 확인하기 귀찮은 사람들은 아래 링크를 통해서 콘솔창에 어떤 오류들이 뜨는지 각각의 브라우저 버전을 바꿔가면서 테스트 해보면 된다.  
* [롤업으로 번들링만 하고, 바벨로 트랜스파일은 하지 않은 파일](https://blog.perfectacle.com/es2015-module/rollup.html)  
* [롤업으로 번들링만 하고, 바벨로 트랜스파일 한 파일](https://blog.perfectacle.com/es2015-module/babel/rollup.html)  
* [롤업으로 번들링만 하고, 걸프 바벨로 트랜스파일 한 파일](https://blog.perfectacle.com/es2015-module/gulp-babel/rollup.html)  
* [웹팩으로 번들링만 하고, 바벨로 트랜스파일은 하지 않은 파일](https://blog.perfectacle.com/es2015-module/webpack.html)  
* [웹팩으로 번들링만 하고, 바벨로 트랜스파일 한 파일](https://blog.perfectacle.com/es2015-module/babel/webpack.html)  
* [웹팩으로 번들링만 하고, 걸프 바벨로 트랜스파일 한 파일](https://blog.perfectacle.com/es2015-module/gulp-babel/webpack.html)
* [parcel로 번들링만 하고, 바벨로 트랜스파일은 하지 않은 파일](https://blog.perfectacle.com/es2015-module/parcel.html)  
* [parcel로 번들링만 하고, 바벨로 트랜스파일 한 파일](https://blog.perfectacle.com/es2015-module/babel/parcel.html)  
* [parcel로 번들링만 하고, 걸프 바벨로 트랜스파일 한 파일](https://blog.perfectacle.com/es2015-module/gulp-babel/parcel.html)

## Result
parcel은 require 함수를 var 키워드도 안 쓰고 해당 변수를 만들고 있음...  
따라서 (gulp-)babel로 트랜스파일하면 strict mode가 돼서 `require is not defined` 오류를 뱉음...  

바벨로 트랜스파일 하지 않았을 때 Rollup의 IIFE(즉시 실행 함수) 모듈 방식은 Browser Friendly해서
ES Module을 제외하고 ES6 문법을 안 쓰면 IE8에서도 잘 먹힌다.  
하지만 나머지 모듈 번들링 방식은 IE9+만 지원한다.  

parcel은 babel로 트랜스파일 하지 않아도 알아서 ES5 코드로 트랜스파일 된다.  

##TEST
마크다운 테스트
당당숭구리당당
https://blog.perfectacle.com/es2015-module/gulp-babel/parcel.html

   var a = 1;
   console.log(a);
