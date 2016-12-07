OPTS=(
  "--language_in=ES6_STRICT"
  "--language_out=ES5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"

  "--js src/heading-service.js"
  "--module common:1"
  
  "--js src/friends/index.js"
  "--js src/friends/friends.js"
  "--module friends:2:common"

  "--js src/countries/index.js"
  "--js src/countries/countries.js"
  "--module countries:2:common"
)
set -ex
java -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]})