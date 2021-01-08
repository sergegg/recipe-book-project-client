# sh cur# sh curl-scripts/index.sh

curl "https://sergeys-recipe-book-project.herokuapp.com/recipes/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "movie": {
      "_id": "'"${ID}"'"
    }
  }'

echo
