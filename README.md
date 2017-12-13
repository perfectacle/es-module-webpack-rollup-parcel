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

dist directory의 html을 실행해서 확인해 볼 것...  
parcel의 경우에는 output file name을 지정하지 못해서 어쩔 수 없이 default 값인 index.js로 파일을 떨굼.

## Result
parcel은 require 함수를 전역에서 쓰기 위해서인지 var 키워드도 안 쓰고 해당 변수를 만들고 있음...  
따라서 (gulp-)babel로 트랜스파일하면 strict mode가 돼서 `require is not defined` 오류를 뱉음...  

Rollup의 IIFE(즉시 실행 함수) 모듈 방식은 Browser Friendly해서 IE8에서도 잘 먹힌다.  
하지만 나머지 모듈 번들링 방식은 IE9+만 지원한다.  

parcel은 babel로 트랜스파일 하지 않아도 알아서 ES5 코드로 트랜스파일 된다.  
궁금한 사람은 직접 `/src/module.js`에서 `var` 키워드를 `const` 키워드로 바꾸고 `npm run parcel` 명령어를 수행해보고, `/dist/index.js`의 결과를 확인해보자.    