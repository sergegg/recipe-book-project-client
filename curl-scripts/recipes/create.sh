# sh curl-scripts/index.sh

curl 'https://sergeys-recipe-book-project.herokuapp.com/recipes' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "recipe": {
      "name": "'"${NAME}"'",
      "category": "'"${CATEGORY}"'",
      "ingredients": "'"${INGREDIENTS}"'",
      "cuisine": "'"${CUISINE}"'"
    }
  }'

echo
