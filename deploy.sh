rm -rf docs/

cd v2
gitbook install
gitbook build
mv _book ../docs

cd ../v1
gitbook install
gitbook build
mv _book ../docs/v1

cd ..
# process docs/index.html
gulp

cd docs
git init
git add -A
git commit -m 'update doc'
git push https://github.com/wangdahoo/vonic-doc.git gh-pages -f