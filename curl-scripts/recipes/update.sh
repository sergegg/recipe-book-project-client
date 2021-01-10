# sh curl-scripts/index.sh

curl "https://sergeys-recipe-book-project.herokuapp.com/recipes/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "recipe": {
      "_id": "'"${ID}"'",
      "name": "'"${NEWNAME}"'",
      "category": "'"${NEWCATEGORY}"'",
      "ingredients": "'"${NEWINGREDIENTS}"'",
      "cuisine": "'"${NEWCUISINE}"'",
      "prepTime": "'"${NEWPREPTIME}"'"
    }
  }'

 echo
