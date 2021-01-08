# sh curl-scripts/index.sh

curl "https://sergeys-recipe-book-project.herokuapp.com/recipes/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "recipe": {
      "_id": "'"${ID}"'"
    }
  }'

echo
