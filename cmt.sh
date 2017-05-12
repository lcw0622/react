git add $1
if $2
then 
git commit $1 -m "'"$2"'"
else
git commit $1 -m 'default commit'
fi
