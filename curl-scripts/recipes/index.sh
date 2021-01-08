# sh curl-scripts/index.sh

curl "https://sergeys-recipe-book-project.herokuapp.com/recipes" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
